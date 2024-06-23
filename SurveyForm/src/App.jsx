import React, { useState, useEffect } from 'react';

function App() {
    const [submit, setSubmit] = useState(false);
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        topic: "",
        language: "",
        experience: "",
        exercise: "",
        diet: "",
        qualification: "",
        study: "",
        feedback: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
    };

    const handleClose = (e) => {
        e.preventDefault();
        setSubmit(false);
        setFormdata({
            name: "",
            email: "",
            topic: "",
            language: "",
            experience: "",
            exercise: "",
            diet: "",
            qualification: "",
            study: "",
            feedback: ""
        });
    };
    const [questions, setQuestions] = useState([]);

    const fetchQuestions = async () => {
        try {
            const response = await fetch('https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&tagged=web&site=stackoverflow');
            const data = await response.json();
            const limitedTitles = data.items.slice(0, 5).map((item) => item.title); // Limiting to first 5 titles
            setQuestions(limitedTitles);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (formdata.topic === "Technology") {
            fetchQuestions();
        }
    }, [formdata.topic]);

    return (
        <div className='lg:flex lg:justify-center'>
        <form onSubmit={handleSubmit} className='border-gray-500 border-2 text-center rounded-xl lg:h-[100vh] bg-gradient-to-tl from-violet-600 to-pink-400 shadow-xl lg:w-[50vw]'>
            <h1 className=' w-full rounded-t-xl h-16 text-4xl italic text-white bg-gradient-to-bl from-blue-400 to-slate-500 flex items-center justify-center'>Survey Form</h1>

            <div className='flex flex-col items-center gap-2 bg-white/30 text-lg backdrop-blur-xl m-3 rounded-xl p-2 '>
                <label htmlFor="name" className='flex flex-col lg:flex-row w-[45vw] items-center justify-between text-xl'>Full Name
                    <input
                        type="text"
                        name='name'
                        required
                        value={formdata.name}
                        onChange={handleChange}
                        className='h-10 text-center 
                            ease-in-out transition-all
                            duration-500 rounded-lg w-[80vw] bg-black/40 outline-none text-white
                            valid:bg-emerald-300 valid:text-black lg:w-[30vw]'
                    />
                </label>
                <label htmlFor="email" className='flex flex-col lg:flex-row w-[45vw] items-center justify-between text-xl'>E-mail
                    <input
                        type="email"
                        name='email'
                        pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
                        required
                        value={formdata.email}
                        onChange={handleChange}
                        className='h-10 text-center 
                            ease-in-out transition-all
                            duration-500 rounded-lg w-[80vw] bg-black/40 outline-none text-white
                            valid:bg-emerald-300 valid:text-black lg:w-[30vw]'
                    />
                </label>

                <label htmlFor="topic" className='flex flex-col lg:flex-row w-[45vw] items-center justify-between text-xl'>
                    Survey Topic
                    <select
                        name="topic"
                        id="topic"
                        onChange={handleChange}
                        required
                        value={formdata.topic}
                        className='h-10 text-center 
                            ease-in-out transition-all
                            duration-500 rounded-lg w-[80vw] bg-black/40 outline-none text-white
                            valid:bg-emerald-300 valid:text-black lg:w-[30vw]'
                    >
                        <option value="" disabled>Select a topic</option>
                        <option value="Technology">Technology</option>
                        <option value="Health">Health</option>
                        <option value="Education">Education</option>
                    </select>
                </label>

                {formdata.topic === "Technology" && (
                    <div className='lg:flex lg:flex-col lg:gap-2'>
                        <label htmlFor="language" className='flex flex-col lg:flex-row w-[45vw] items-center  justify-between'>
                            Favorite coding Language
                            <select
                                name="language"
                                id="language"
                                onChange={handleChange}
                                required
                                value={formdata.language}
                                className='h-10 text-center 
                            ease-in-out transition-all
                            duration-500 rounded-lg w-[80vw] bg-black/40 outline-none text-white
                            valid:bg-emerald-300 valid:text-black lg:w-[30vw]'
                            >
                                <option value="" disabled>Select a language</option>
                                <option value="Javascript">javascript</option>
                                <option value="Python">python</option>
                                <option value="Java">java</option>
                                <option value="C#">c#</option>
                            </select>
                        </label>
                        <label htmlFor="experience" className='flex flex-col lg:flex-row w-[45vw] items-center justify-between text-xl'>
                            Years of Experience
                            <input
                                type="number"
                                name='experience'
                                max='100'
                                required
                                value={formdata.experience}
                                onChange={handleChange}
                                className='h-10 text-center 
                            ease-in-out transition-all
                            duration-500 rounded-lg w-[80vw] bg-black/40 outline-none text-white
                            valid:bg-emerald-300 valid:text-black lg:w-[30vw]'
                            />
                        </label>
                    </div>
                )}

                {formdata.topic === "Health" && (
                    <div className='lg:flex lg:flex-col lg:gap-2'>
                        <label htmlFor="exercise" className='flex flex-col lg:flex-row w-[45vw] items-center justify-between text-xl'>
                            Exercise Frequency
                            <select
                                name="exercise"
                                id="exercise"
                                onChange={handleChange}
                                required
                                value={formdata.exercise}
                                className='h-10 text-center 
                            ease-in-out transition-all
                            duration-500 rounded-lg w-[80vw] bg-black/40 outline-none text-white
                            valid:bg-emerald-300 valid:text-black lg:w-[30vw]'
                            >
                                <option value="" disabled>Select frequency</option>
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Rarely">Rarely</option>
                            </select>
                        </label>
                        <label htmlFor="diet" className='flex flex-col lg:flex-row w-[45vw] items-center justify-between text-xl'>
                            Diet Preference
                            <select
                                name="diet"
                                id="diet"
                                onChange={handleChange}
                                required
                                value={formdata.diet}
                                className='h-10 text-center 
                            ease-in-out transition-all
                            duration-500 rounded-lg w-[80vw] bg-black/40 outline-none text-white
                            valid:bg-emerald-300 valid:text-black lg:w-[30vw]'
                            >
                                <option value="" disabled>Select a diet</option>
                                <option value="Vegetarian">Vegetarian</option>
                                <option value="Vegan">Vegan</option>
                                <option value="Non-Vegetarian">Non-Vegetarian</option>
                            </select>
                        </label>
                    </div>
                )}

                {formdata.topic === "Education" && (
                    <div className='lg:flex lg:flex-col lg:gap-2'>
                        <label htmlFor="qualification" className='flex flex-col lg:flex-row w-[45vw] items-center justify-between text-xl'>
                            Highest Qualification
                            <select
                                name="qualification"
                                id="qualification"
                                onChange={handleChange}
                                required
                                value={formdata.qualification}
                                className='h-10 text-center 
                            ease-in-out transition-all
                            duration-500 rounded-lg w-[80vw] bg-black/40 outline-none text-white
                            valid:bg-emerald-300 valid:text-black lg:w-[30vw]'
                            >
                                <option value="" disabled>Select a qualification</option>
                                <option value="High School">High School</option>
                                <option value="Bachelor's">Bachelor's</option>
                                <option value="Master's">Master's</option>
                                <option value="PhD">PhD</option>
                            </select>
                        </label>
                        <label htmlFor="study" className='flex flex-col lg:flex-row w-[45vw] items-center justify-between text-xl'>
                            Field Of Study
                            <input
                                type="text"
                                name="study"
                                required
                                value={formdata.study}
                                onChange={handleChange}
                                className='h-10 text-center 
                            ease-in-out transition-all
                            duration-500 rounded-lg w-[80vw] bg-black/40 outline-none text-white
                            valid:bg-emerald-300 valid:text-black lg:w-[30vw]'
                            />
                        </label>
                    </div>
                )}

                <label htmlFor="feedback" className='flex flex-col lg:flex-row w-[45vw] items-center justify-between text-xl '>
                    Feedback
                    <textarea
                        name="feedback"
                        id="feedback"
                        minLength={50}
                        required
                        value={formdata.feedback}
                        onChange={handleChange}
                        className='h-24 text-center 
                            ease-in-out transition-all
                            duration-500 rounded-lg w-[80vw] bg-black/40 outline-none text-white
                            valid:bg-emerald-300 valid:text-black lg:w-[30vw]'
                    ></textarea>
                </label>

                <button type="submit" className='text-xl p-1 bg-gradient-to-r from-cyan-700 to-gray-700 w-24 rounded-full font-semibolda text-white italic '>Submit</button>

            </div>


            {submit && (
                <div className='absolute flex flex-col items-center bg-cyan-400 lg:h-full rounded-lg top-0  lg:w-[50vw] p-2 gap-3 w-full  '>
                    <h2 className='italic underline font-bold underline-offset-2 text-xl text-white lg:text-3xl'>Submitted Information</h2>
                    <div className='flex flex-col bg-white/80  w-full rounded-lg lg:text-xl text-gray-800 lg:gap-2 p-1  '>
                        <p>Name - {formdata.name}</p>
                        <p>Email - {formdata.email}</p>
                        <p>Survey Topic - {formdata.topic}</p>
                        {formdata.topic === "Technology" && (

                            <>
                                <p>Favorite Coding Language - {formdata.language}</p>
                                <p>Years of Experience - {formdata.experience}</p>
                                <div>
                                    <h3>Frequently Asked Questions:</h3>
                                    <ul>
                                        {questions.map((title, index) => (
                                            <li key={index}>Q.{title}</li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        )}

                        {formdata.topic === "Health" && (
                            <>
                                <p>Exercise Frequency - {formdata.exercise}</p>
                                <p>Diet Preference - {formdata.diet}</p>
                                <h3>Frequently Asked Questions:</h3>
                                <p>Q1.For How many hours we should do exercise?</p>
                                <p>Q2.What should i eat in Post workout?</p>
                                <p>Q3.Exercise for home Workout?</p>
                            </>
                        )}
                        {formdata.topic === "Education" && (
                            <>
                                <p>Highest Qualification - {formdata.qualification}</p>
                                <p>Field Of Study - {formdata.study}</p>
                                <h3>Frequently Asked Questions:</h3>
                                <p>Q1.Do we learn coding in BCA</p>
                                <p>Q2.Best Engineering college in NCR?</p>
                                <p>Q3.B.tech VS BCA</p>
                            </>
                        )}
                        <p className='break-words'>Feedback - {formdata.feedback}</p>
                    </div>
                    <button className='bg-red-500 text-white text-xl font-semibold p-2 w-24 rounded-lg' onClick={handleClose} >Close</button>
                </div>
            )}

        </form>
        </div>
    );
}

export default App;
