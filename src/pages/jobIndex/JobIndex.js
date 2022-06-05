import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as jobsApi from '../../utilities/jobs-api';
import * as userService from '../../utilities/users-service';



const JobIndex = ({ user, setUser, jobs }) => {

    const [job, setJob] = useState(null);
    
    return (
        <main className='w-screen h-screen grid-flow-row grid grid-cols-4 gap-5'>
            {
                jobs && jobs.map((job) => {
                    return (
                        <div className='w-[300px] h-[300px]'>
                            <div>
                                <div className=' w-[300px] h-[300px]'>
                                    <Link to={`/show/${job._id}`} onClick={() => {setJob(job)}} >
                                        <article key={job._id} className="">
                                            <div className="w-[300px] h-[300px]">
                                                <div className="min-w-[300px] min-h-[300px] flex flex-col justify-center items-center rounded-lg shadow-lg bg-white border-2 border-solid border-indigo-600 truncate">
                                                    <h1 className="text-gray-900 text-2xl font-bold leading-tight mb-5 truncate">{job.company}</h1>
                                                    <br/>
                                                    <p className="text-gray-700 text-xl mb-4">
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
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) 
                })
            } 
        </main>
    )
}

export default JobIndex