
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as jobsApi from '../../utilities/jobs-api';
import * as userService from '../../utilities/users-service';

export default function ShowJob({ user, setUser }){
    const { id } = useParams()
    const [job, setJob] = useState(null);
    const Navigate = useNavigate();

    const getJob = async() => {
        const res = await jobsApi.showJob(id)
        setJob(res)
    }

    useEffect(() => {
        getJob()
    }, []) 


    // useEffect(() => {
    //     (async () => {
    //         try{
    //             const res = await axios.get(`/api/jobs/${id}`)
    //             setJob(res.data)
    //         } catch (err){
    //             console.log(err)
    //         }
    //     })()
    // }, [])

    return(
        <>
            <div>
                <div>
                    { job ? ( 
                    <div>
                        <h1>
                            {job.company}
                        </h1>
                        <h2>
                            Location: {job.location}
                        </h2>
                        <h2>
                            Position: {job.position}
                        </h2>
                        <h2>
                            Date Applied: {job.date}
                        </h2>
                        <h2>
                            Status: {job.status}
                        </h2>
                        <h2>
                            Application Service Used: {job.applicationService}
                        </h2>
                        <h2>
                            Company Contacts: {job.contacts}
                        </h2>
                        <h2>
                            Meeting History: {job.history}
                        </h2>
                        <h2>
                            Interview Process: {job.interviewProcess}
                        </h2>
                        <h2>
                            Interview Notes: {job.interviewNotes}
                        </h2>
                        <h2>
                            Technical Notes: {job.technicalNotes}
                        </h2>
                        <div>
                            <button onClick={() => Navigate(`/update/${id}`)}>Update Job</button>
                        </div>
                        <div>
                            <button onClick={() => Navigate(`/delete/${id}`)}>Delete Job</button>
                        </div>
                    </div>
                    ) 
                        : 
                        <div>
                            <h1>LOADING</h1>
                            <svg class="animate-bounce w-6 h-6 ..."></svg>
                        </div>
                    }
                    
                </div>      
            </div>
        </>
        )
}