// import DefaultLayout from "../layout/DefaultLayout";
import { useState, useEffect } from 'react';
import axios from 'axios';

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
//TODO: Show selected job and have an update button to take to edit route for updates