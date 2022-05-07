import { useEffect, useState } from 'react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as jobsApi from '../../utilities/jobs-api';

export default function ShowJob({ user, setUser }){
    let { id } = useParams();

    const Navigate = useNavigate();

    const [job, setJob] = useState(null);

    const fetchJobs = async() => {
        const res = await jobsApi.showJob(user._id, id)
        setJob(res)
    }

    useEffect(() => {
        fetchJobs()
    }, []) 

    const handleClick = () => {
        Navigate(`/update/${job._id}`)
    }

    return(
        <>
            <div className='flex justify-center'>
                <div className='m-10 mb-5 block p-6 rounded-lg shadow-lg bg-white border-2 border-solid border-indigo-600 w-screen'>
                    { job ?
                    <div>
                        <h1 className="text-5xl text-gray-800">
                            {job.company}
                        </h1>
                        <h2 className='text-gray-800 text-lg'>
                           <label className="text-indigo-700 text-xl">Location:</label> {job.location}
                        </h2>
                        <h2 className='text-gray-800 text-lg'>
                            <label className="text-indigo-700 text-xl">Position: </label> {job.position}
                        </h2>
                        <h2 className='text-gray-800 text-lg'>
                            <label className="text-indigo-700 text-xl">Date Applied: </label> {job.date}
                        </h2>
                        <h2 className='text-gray-800 text-lg'>
                            <label className="text-indigo-700 text-xl">Status: </label> {job.status}
                        </h2>
                        <h2 className='text-gray-800 text-lg'>
                            <label className="text-indigo-700 text-xl">Application Service Used: </label> {job.applicationService}
                        </h2>
                        <h2 className='text-gray-800 text-lg'>
                            <label className="text-indigo-700 text-xl">Company Contacts: </label> {job.contacts}
                        </h2>
                        <h2 className='text-gray-800 text-lg'>
                            <label className="text-indigo-700 text-xl"> Meeting History: </label> {job.history}
                        </h2>
                        <h2 className='text-gray-800 text-lg'>
                            <label className="text-indigo-700 text-xl"> Interview Process: </label> {job.interviewProcess}
                        </h2>
                        <h2 className='text-gray-800 text-lg'>
                            <label className="text-indigo-700 text-xl"> Interview Notes: </label> {job.interviewNotes}
                        </h2>
                        <h2 className='text-gray-800 text-lg'>
                            <label className="text-indigo-700 text-xl"> Technical Notes: </label> {job.technicalNotes}
                        </h2>
                        <div className='flex pt-6'>
                            <button className='inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' onClick={handleClick}>Update
                            </button>
                            <div className="ml-6">
                                <button className='nline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' onClick={() => Navigate(`/delete/${job.id}`)}>Delete</button>
                            </div>
                        </div>
                    </div>
                        : 
                        <div>
                            <h1>LOADING</h1>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}