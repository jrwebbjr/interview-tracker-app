
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

export default function ShowJob(){
    const { id } = useParams()

    const Navigate = useNavigate();

    const [job, setJob] = useState(null);

    useEffect(() => {
        (async () => {
            try{
                const res = await axios.get(`/api/jobs/${id}`)
                setJob(res.data)
            } catch (err){
                console.log(err)
            }
        })()
    }, [])

    const handleClick = (id) => {
            Navigate('/:id/update/')   
        }
    
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
                            <Button onClick={handleClick(job._id)} /> 
                            <Button onClick={handleClick(job._id)} />
                        </div>
                    </div>
                    ) 
                        : 
                        <svg class="animate-bounce w-6 h-6 ...">
                            Loading...
                        </svg>
                    }
                    
                </div>      
            </div>
        </>
        )
}
//TODO: Show selected job and have an update button to take to edit route for updates