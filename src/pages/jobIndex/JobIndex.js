import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as jobsApi from '../../utilities/jobs-api';
import * as userService from '../../utilities/users-service';



const JobIndex = ({ user, setUser }) => {

    const [jobs, setJobs] = useState([])

    const Navigate = useNavigate();

    const handleClick = (_id) => {
        Navigate(`/jobs/${_id}/show`)   
    }

    const fetchJobs = async() => {
        const res = await jobsApi.getJobs(user._id)
        setJobs(res)
    }

    useEffect(() => {
        fetchJobs()
    }, []) 

    const handleLogout = (e) => {
        e.preventDefault();

        userService.logOut();
        Navigate('/');
    }

    return (
    <div>
        {
            jobs && jobs.map((job) => {
                return (
                    <div className=''>
                        <button onClick={handleLogout}>Log Out</button>
                        <article key={job._id} className="">
                            <div class="flex">
                                <div class="block p-6 rounded-lg shadow-lg bg-white border-2 border-solid border-indigo-600 truncate">
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
                    </div>
                ) 
            })
        } 
    </div>
    )
}

export default JobIndex