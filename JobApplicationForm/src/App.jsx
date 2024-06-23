import React, { useState } from 'react'

function App() {
  const [position, setPosition] = useState(null);
  const handlePosition = (e) => {
    setPosition(e.target.value);
  }
  const [skills, setSkills] = useState({
    JavaScript: false,
    HTML: false,
    CSS: false,
    React: false,
    NodeJS: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setError("")
    setSkills({
      ...skills,
      [name]: checked,
    });

  };
  const [submit, setsubmit] = useState(false)
  const [error, setError] = useState({})
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    number: "",
    appliedPosition: "",
    RelevantExperience: "",
    portfolio: "",
    managerExperience: "",
    skills: "",
    date: "",
    time: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const validatePhoneNumber = (number) => {
   
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { number } = formdata;
    const isAnySkillSelected = Object.values(skills).some(skill => skill);
    if (!isAnySkillSelected) {
      setError({
        ...error,
        checkbox: 'You should select atleast one skill',
      });
    }
    else if (!validatePhoneNumber(number)) {
      setError({
        ...error,
        number: 'Phone number must be exactly 10 digits.',
      });
    }
    else {
      setError('');
      setsubmit(true);
    }
  };
  const handleClose = (e) => {
    e.preventDefault()
    setsubmit(false)
    setPosition(null)
    setformdata({
      name: "",
      email: "",
      number: "",
      appliedPosition: "",
      RelevantExperience: "",
      portfolio: "",
      managerExperience: "",
      skills: "",
      date: "",
      time: ""
    })
    setSkills({
      JavaScript: false,
      HTML: false,
      CSS: false,
      React: false,
      NodeJS: false,
    })
  }
  const handleCombinedChange = (e) => {
    handleChange(e);
    handlePosition(e)
  }
  return (
    <form action="" onSubmit={handleSubmit} className='lg:flex lg:justify-center'>
      <fieldset className='border-black border-2 text-center  rounded-xl   lg:w-[50vw] lg:h-[100vh] bg-gradient-to-tr from-black/60 '>
        <legend className='italic text-2xl '>Job Application Form</legend>
        <div className='flex flex-col items-center text-lg   lg:text-xl h-full justify-evenly p-5 '>
          <label htmlFor="" className='flex flex-col lg:flex-row  w-full items-center justify-between'>Full Name
            <input type="text" name='name' required value={formdata.name} onChange={handleChange} className='h-8 text-center rounded-lg w-[80vw] backdrop-blur-xl  text-black outline-none valid:border-green-700 invalid:border-red-500 border-2 lg:w-[30vw]' />
          </label>
          <label htmlFor="" className='flex flex-col lg:flex-row  w-full items-center justify-between'>E-mail
            <input type="email" name='email' pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$' required className='h-8 text-center rounded-lg w-[80vw] backdrop-blur-xl  text-black outline-none valid:border-green-700 invalid:border-red-500 border-2 lg:w-[30vw]' value={formdata.email} onChange={handleChange} />
          </label>
          <label htmlFor="" className='flex flex-col lg:flex-row  w-full items-center justify-between'>Phone Number
            <input type="number" name='number' required pattern="^\d{10}$"
              minLength="10" className='h-8 text-center rounded-lg w-[80vw] backdrop-blur-xl  text-black outline-none valid:border-green-700 invalid:border-red-500 border-2 lg:w-[30vw]' value={formdata.number} onChange={handleChange} />
          </label>
          <label htmlFor="" className='flex flex-col lg:flex-row  w-full items-center justify-between'>
            Applying for Position
            <select name="appliedPosition" id="" onChange={handleCombinedChange} required className='h-8 text-center rounded-lg w-[80vw] backdrop-blur-xl  text-black outline-none valid:border-green-700 invalid:border-red-500 border-2 lg:w-[30vw]' value={formdata.appliedPosition}  >
              <option value="" disabled >Select Position</option>
              <option value="Developer" >Developer</option>
              <option value="Designer" >Designer</option>
              <option value="Manager" >Manager</option>
            </select>
          </label>

          {(position === "Developer" || position === "Designer") && (<div className='w-full'>
            <label className='flex flex-col lg:flex-row w-full items-center justify-between'>
              Relevant Experience
              <input
                type="number"
                name='RelevantExperience'
                max='100'
                required
                className='h-8 text-center rounded-lg w-[80vw] backdrop-blur-xl text-black outline-none valid:border-green-700 invalid:border-red-500 border-2 lg:w-[30vw]'
                value={formdata.RelevantExperience}
                onChange={handleChange}
              />
            </label></div>
          )}


          {position === 'Designer' && (
            <div className='w-full'>
              <label className='flex flex-col lg:flex-row w-full items-center justify-between'>
                Portfolio URL
                <input
                  type="url"
                  name='portfolio'
                  required
                  className='h-8 text-center rounded-lg w-[80vw] backdrop-blur-xl text-black outline-none valid:border-green-700 invalid:border-red-500 border-2 lg:w-[30vw]'
                  value={formdata.portfolio}
                  onChange={handleChange}
                />
              </label>
            </div>
          )}

          {position === "Manager" && (
            <div className='w-full'>
              <label className='flex flex-col lg:flex-row w-full items-center justify-between'>
                Management Experience
                <input
                  type="number"
                  name='managerExperience'
                  max='100'
                  required
                  className='h-8 text-center rounded-lg w-[80vw] backdrop-blur-xl text-black outline-none valid:border-green-700 invalid:border-red-500 border-2 lg:w-[30vw]'
                  value={formdata.managerExperience}
                  onChange={handleChange}
                />
              </label>
            </div>
          )}

          <label htmlFor="" className='flex flex-col lg:flex-row justify-between w-full'>Additional Skills
            <div className='flex  gap-x-5 justify-center  flex-wrap'>
              <label htmlFor="javascript">
                <input
                  type="checkbox"
                  id="javascript"
                  name="JavaScript"
                  checked={skills.JavaScript}
                  onChange={handleCheckboxChange}
                />
                JavaScript
              </label>
              <label htmlFor="html">
                <input
                  type="checkbox"
                  id="html"
                  name="HTML"
                  checked={skills.HTML}
                  onChange={handleCheckboxChange}
                />
                HTML
              </label>
              <label htmlFor="css">
                <input
                  type="checkbox"
                  id="css"
                  name="CSS"
                  checked={skills.CSS}
                  onChange={handleCheckboxChange}
                />
                CSS
              </label>
              <label htmlFor="react">
                <input
                  type="checkbox"
                  id="react"
                  name="React"
                  checked={skills.React}
                  onChange={handleCheckboxChange}
                />
                React
              </label>
              <label htmlFor="nodejs">
                <input
                  type="checkbox"
                  id="nodejs"
                  name="NodeJS"
                  checked={skills.NodeJS}
                  onChange={handleCheckboxChange}
                />
                NodeJS
              </label></div>
          </label>

          <label htmlFor="" className='flex flex-col lg:flex-row  w-full items-center justify-between'>Preferred Interview Date
            <input type="date" name="date" id="" onChange={handleChange} required className='h-8 text-center rounded-lg w-[80vw] backdrop-blur-xl text-black outline-none valid:border-green-700 invalid:border-red-500 border-2 lg:w-[30vw]' value={formdata.date} />
          </label>
          <label htmlFor="" className='flex flex-col lg:flex-row  w-full items-center justify-between
                        '>Preferred Interview Time
            <input type="time" name="time" id="" required className='h-8 text-center rounded-lg w-[80vw] backdrop-blur-xl  text-black outline-none valid:border-green-700 invalid:border-red-500 border-2 lg:w-[30vw]' value={formdata.time} onChange={handleChange} />
          </label>

          {error.checkbox && <p className='text-red-600'>{error.checkbox}</p>}
          {error.number && <p className='text-red-600'>{error.number}</p>}
          <button type="submit" className='text-lg bg-black text-white w-32 mt-2 rounded-full'>Submit</button>

        </div>
      </fieldset>
      {submit && (
        <div className='absolute flex flex-col items-center bg-gray-600/50 h-full rounded-lg  backdrop-blur-sm top-0 w-full justify-center gap-3 lg:w-[50vw] lg:text-xl'>
          <h2 className='italic underline font-bold underline-offset-2 text-lg lg:text-2xl'>Submitted Information</h2>
          <div className='flex flex-col text-gray-800 gap-2 font-semibold items-center border-2 border-black rounded-xl p-2'>
            <p>Name-{formdata.name}</p>
            <p>Email-{formdata.email}</p>
            <p>Phone Number-{formdata.number}</p>
            <p>Applied Position-{formdata.appliedPosition} </p>
            {(formdata.appliedPosition === "Developer" || formdata.appliedPosition === "Designer") && (
              <p>Relevant Experience- {formdata.RelevantExperience}  </p>
            )}
            {formdata.appliedPosition === "Designer" && (
              <p>Portfolio Link- {formdata.portfolio}</p>
            )

            }
            {formdata.appliedPosition === "Manager" && (
              <p>Management Experience- {formdata.managerExperience}</p>
            )

            }
            <p className='flex flex-wrap items-center gap-1 justify-center'>Selected Skills-
              {Object.entries(skills).map(([skill, isSelected]) => (
                isSelected && <p>{skill}</p>
              ))}
            </p>
            <p> Preferred Interview Date- {formdata.date} </p>
            <p> Preferred Interview Time- {formdata.time} </p>

          </div>
          <button onClick={handleClose} className='font-semibold bg-black text-white w-28 rounded-full  text-lg lg:text-xl'>Close</button>
        </div>
      )

      }

    </form>

  )
}

export default App