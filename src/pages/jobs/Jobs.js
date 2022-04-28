import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import DefaultLayout from '../layout/DefaultLayout';
import('../../index.css');

export default function Jobs(){
    const [jobs, setJobs] = useState([])

    const getAllJobs = async() => {
        const res = await axios.get('/api/jobs')
        setJobs(res.data)
    }

    useEffect(() => {
        getAllJobs()
    }, []) 

    return(
        <>
            <DefaultLayout />
            <div className='cards'>
                {
                    jobs.map((job) => {
                        return (
                            <article key={job._id} className="card">
                                <header>
                                    <h1>{job.company}</h1>
                                </header>
                                <div className='content'>
                                    <p>{job.location}</p>
                                    <p>{job.date}</p>
                                </div>
                            <a href={`/jobs/${ job._id }`}><button className='button'>Open</button></a> 
                            </article>
                        ) 
                    })
                }         
            </div>
        </>
        )
}
//TODO: Map through DB of jobs and show them all in cards