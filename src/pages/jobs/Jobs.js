import { useState, useEffect } from 'react';
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
            <ul>
                {
                    jobs.map((job) => {
                        return <li key={job._id}>{job.company}</li> 
                    })
                }         
            </ul>
        </>
        )
}
//TODO: Map through DB of jobs and show them all in cards