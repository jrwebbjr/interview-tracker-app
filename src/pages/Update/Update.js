import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import * as jobsApi from '../../utilities/jobs-api';

export default function Update({ user, jobs }){

    const { id } = useParams();

    const [job, setJob] = useState({});

    const company = useRef()
    const location = useRef()
    const position = useRef()
    const date = useRef()
    const status = useRef()
    const applicationService = useRef()
    const contacts = useRef()
    const history = useRef()
    const interviewProcess = useRef()
    const interviewNotes = useRef()
    const technicalNotes = useRef()

    const Navigate = useNavigate();

    useEffect(() => {
        setJob(jobs.find((obj) => obj._id === id))
    }, [])

    console.log(job)
    console.log(user._id)

    const handleSubmit = async (e) => {
        console.log("before Try")
        //prevents page from refreshing
        e.preventDefault();
        
        try{ 
            console.log("after Try")
            await jobsApi.updateJob(user._id, job._id, {
                company: company.current.value, location: location.current.value, position: position.current.value, date: date.current.value, status: status.current.value, applicationService: applicationService.current.value, contacts: contacts.current.value, history: history.current.value, interviewProcess: interviewProcess.current.value, interviewNotes: interviewNotes.current.value, technicalNotes: technicalNotes.current.value
            // await fetch(`http://localhost:3001/api/jobs/${user._id}/update/${id}`,{
            //     method: "PUT", 
            //     headers: {
            //         "Accept": "application/json",
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         company: company.current.value, location: location.current.value, position: position.current.value, date: date.current.value, status: status.current.value, applicationService: applicationService.current.value, contacts: contacts.current.value, history: history.current.value, interviewProcess: interviewProcess.current.value, interviewNotes: interviewNotes.current.value, technicalNotes: technicalNotes.current.value
            //     })
            })
            console.log("After API")
            Navigate(-1);
        }catch(error) {
            console.error(error)
    } 
}
    return (
        <div>
            <div>
                <h1> Update your Job </h1>  
                <form className='' onSubmit={handleSubmit}>
                    <input type="text" ref={company} name="company" defaultValue={job.company} />
                    <input type="text" ref={location} name="location" defaultValue={job.location} />  
                    <input type="text" ref={position} name="position" defaultValue={job.position} /> 
                    <input type="text" ref={date} name="date" defaultValue={job.date} />   
                    <input type="text" ref={status} name="status" defaultValue={job.status} />  
                    <input type="text" ref={applicationService} name="applicationService" 
                    defaultValue={job.applicationService} />   
                    <input type="text" ref={contacts} name="contacts" defaultValue={job.contacts} />  
                    <input type="text" ref={history} name="history" defaultValue={job.history} />  
                    <input type="text" ref={interviewProcess} name="interviewProcess" 
                    defaultValue={job.interviewProcess} />  
                    <input type="text" ref={interviewNotes} name="interviewNotes" defaultValue={job.interviewNotes} />  
                    <input type="text" ref={technicalNotes} name="technicalNotes" defaultValue={job.technicalNotes} /> 
                    <input type="submit" value="Update" />
                </form>  
            </div>
        </div>
        
        
    )
}