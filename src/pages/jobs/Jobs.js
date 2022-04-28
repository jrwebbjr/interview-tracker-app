import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
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
            <div className='cards'>
                {
                    jobs.map((job) => {
                        return (
                            <div className='card-container'>
                                <article key={job._id} className="card">
                                    <header>
                                        <h3>{job.company}</h3>
                                    </header>
                                    <div className='content'>
                                        <p>{job.location}</p>
                                        <p>{job.date}</p>
                                    </div>
                                    <a href={`/jobs/${ job._id }`}><button className='button'>Open</button></a>
                                </article>
                            </div>
                            
                        ) 
                    })
                }         
            </div>
        </>
        )
}
//TODO: Map through DB of jobs and show them all in cards