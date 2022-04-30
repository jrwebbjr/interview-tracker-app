import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import('../../index.css');

export default function Jobs(){
    const [jobs, setJobs] = useState([])

    const Navigate = useNavigate();

    const handleClick = (id) => {
        // e.preventDefault()

        Navigate(`/jobs/${id}`)   
    }

    const getAllJobs = async() => {
        const res = await axios.get('/api/jobs/')
        setJobs(res.data)
    }

    useEffect(() => {
        getAllJobs()
    }, []) 

    return(
        <>
            <div className='grid grid-cols-4 grid-rows-2 gap-4'>
                {
                    jobs.map((job) => {
                        return (
                            <div className='grid grid-cols-4 grid-rows-2 gap-4 place-content-around'>
                                <article key={job._id} className="card">
                                    <div class="flex">
                                        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{job.company}</h5>
                                            <p class="text-gray-700 text-base mb-4">
                                             {job.location}
                                             <br/>
                                             {job.date}
                                            </p>
                                            <button type="button" onClick={() => handleClick(job._id)} class="inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                            Open</button>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ) 
                    })
                }         
            </div>
            <div class="flex justify-center">
            <nav aria-label="Page navigation example">
                <ul class="flex list-style-none">
                <li class="page-item disabled"><a
                    class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-500 pointer-events-none focus:shadow-none"
                    href="#" tabindex="-1" aria-disabled="true">Previous</a></li>
                <li class="page-item"><a
                    class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    href="#">1</a></li>
                <li class="page-item active"><a
                    class="page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                    href="#">2 <span class="visually-hidden">(current)</span></a></li>
                <li class="page-item"><a
                    class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    href="#">3</a></li>
                <li class="page-item"><a
                    class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    href="#">Next</a></li>
                </ul>
            </nav>
            </div>
        </>
        )
}
//TODO: Map through DB of jobs and show them all in cards