import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as jobsApi from '../../utilities/jobs-api';
import * as userService from '../../utilities/users-service';



const JobIndex = ({ user, setUser, jobs }) => {

    const [job, setJob] = useState(null);
    
    return (
    <div>
        {
            jobs && jobs.map((job) => {
                return (
                    <Link to={`/show/${job._id}`} onClick={() => {setJob(job)}} >
                        <div className=''>
                            <article key={job._id} className="">
                                <div className="flex">
                                    <div className="m-10 mb-5 block p-6 rounded-lg shadow-lg bg-white border-2 border-solid border-indigo-600 truncate">
                                        <h1 className="text-gray-900 text-xl font-bold leading-tight mb-5">{job.company}</h1>
                                        <p className="text-gray-700 text-base mb-4">
                                            {job.location}
                                        <br/>
                                            {job.date}
                                        </p>
                                        <div className='flex pt-12'>
                                            <button type="button" className="inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                            Open</button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </Link>
                ) 
            })
        } 
    </div>
    )
}

export default JobIndex