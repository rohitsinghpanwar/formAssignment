import React,{useState} from 'react'

function App() {
    const [guest, setGuest] = useState(null);
    
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      age: '',
      attendingwithGuest: '',
      guest: ''
    })
    const [submit, setsubmit] = useState(false)
    const handleRadioEvent = (e) => {
      setGuest(e.target.value);
    }
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
    const handleCombinedChange=(e)=>{
      handleRadioEvent(e);
      handleChange(e);
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      setsubmit(true);
    };
    const handleClose=(e)=>{
      e.preventDefault()
      setsubmit(false)
      setGuest(null)
      setFormData({name: '',
        email: '',
        age: '',
        attendingwithGuest: '',
        guest: ''})
    }
    return (
      <div className='lg:flex lg:justify-center'>
      <div className='flex flex-col border-2 items-center shadow-lg bg-gradient-to-l from-blue-500 to-cyan-300  rounded-lg border-gray-500  justify-center h-[100vh] gap-5 lg:w-[50vw] '>
        <h1 className='italic underline underline-offset-2 text-2xl font-bold '>Event Registration Form</h1>
        
        <form action="" onSubmit={handleSubmit} className='flex flex-col items-center backdrop-blur-xl bg-white/25 rounded-xl p-5 text-lg gap-2 '>
       
          <label htmlFor="name" className='flex  items-center flex-col lg:text-xl justify-evenly lg:w-[45vw] lg:flex-row'>Enter Your Name
            <input type="text" name="name" value={formData.name} onChange={handleChange} className='h-8 w-[80vw] text-center rounded-md lg:w-[30vw] '/>
          </label>
          <label htmlFor="email" className='flex  items-center flex-col lg:text-xl justify-evenly lg:w-[45vw] lg:flex-row lg:gap-2'>Enter Your Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} id="email" className='h-8 w-[80vw] text-center rounded-md lg:w-[30vw]' pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$' required />
          </label>
          <label htmlFor="age" className='flex  items-center flex-col lg:text-xl justify-evenly lg:w-[45vw] lg:flex-row lg:gap-5'>Enter Your Age
            <input type="number" name="age" value={formData.age} onChange={handleChange} id="age" className='h-8 w-[80vw] text-center rounded-md lg:w-[30vw]' min="1" required />
          </label>
  
          <label htmlFor="" className='flex  items-center flex-col lg:flex-row lg:gap-32'>
            Are you attending with a guest?
            <div className='flex gap-10 lg:pr-36'>
            <label htmlFor="">
              <input type="radio" value='yes' name='attendingwithGuest' checked={formData.attendingwithGuest === 'yes'}
                onChange={handleCombinedChange} />Yes
            </label>
            <label htmlFor="">
              <input type="radio" value='no' name='attendingwithGuest' 
              checked={formData.attendingwithGuest === 'no'} onChange={handleCombinedChange} />
              No
            </label>
            </div>
          </label>
  
          <div>
            {guest === 'yes' && (
              <label htmlFor="" className='flex  items-center flex-col lg:text-xl justify-evenly lg:w-[45vw] lg:flex-row lg:gap-10'>
                Guest Name
                <input type="text" name="guest" id="" value={formData.guest}
                  onChange={handleChange} className='h-8 w-[80vw] text-center rounded-md lg:w-[30vw]' required />
              </label>
            )}
          </div>
          <button type='submit' className=' font-semibold  w-20 rounded-full border-[6px] border-double border-black'>Submit</button>
        </form>
        {submit && (
          <div className=' absolute flex flex-col items-center bg-yellow-400/40 h-[100vh] rounded-lg p-2 backdrop-blur-xl  w-full justify-center gap-2 lg:w-[50vw] '>
            <h2 className='italic underline font-bold underline-offset-2 text-lg lg:text-2xl'>Submitted Information</h2>
            <div className='flex flex-col items-center rounded-xl p-2 font-semibold text-gray-800 gap-2 border-2 border-black lg:text-xl'>
            <p>Name:{formData.name}</p>
            <p>Email:{formData.email}</p>
            <p>Age:{formData.age}</p>
            <p>Attending with Guest: {formData.attendingwithGuest}</p>
            {formData.attendingwithGuest === 'yes' && (
              <p>Guest Name: {formData.guest}</p>
            )}
            </div>
            <button onClick={handleClose} className='font-semibold border-[6px] border-double border-black w-20 rounded-full  italic lg:text-xl'>Close</button>
            
            </div>
        )
  
        }
      </div>
      </div>
    )
}

export default App