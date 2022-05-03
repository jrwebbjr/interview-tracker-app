import React from 'react';
import App from '../pages/app/App';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';


const Jobs = () => {

    // const Navigate = useNavigate();

    // const [jobs, setJobs] = useState([])
    // const [loading, setLoading] = useState(true)

    // const fetchJobs = async() => {
    //     setLoading(true);
    //     const res = await axios.get('/api/jobs/')
    //     setJobs(res.data)
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchJobs()
    // }, []) 

    const handleClick = (_id) => {
        Navigate(`/jobs/${_id}`)   
    }
    return (
    <div>
        {
            jobs.map((job) => {
                return (
                    <div className=''>
                        { !loading ? 
                        <article key={job.id} className="">
                            <div class="flex">
                                <div class="block p-6 rounded-lg shadow-lg bg-white border-2 border-solid border-indigo-600">
                                    <h1 class="text-gray-900 text-xl font-bold leading-tight mb-5">{job.company}</h1>
                                    <p class="text-gray-700 text-base mb-4">
                                        {job.location}
                                    <br/>
                                        {job.date}
                                    </p>
                                    <div className='pt-12'>
                                        <button type="button" onClick={() => handleClick(job._id)} class="inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                        Open</button>
                                    </div>
                                </div>
                            </div>
                        </article>
                        : 
                            <svg class="animate-bounce w-6 h-6 ...">
                                Loading...
                            </svg>
            }
                    </div>
                ) 
            })
        } 
    </div>
    )
}

export default Jobs

