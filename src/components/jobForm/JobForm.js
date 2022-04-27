import { useState } from "react";
import { FcCheckmark } from 'react-icons/fc';
import { useNavigate } from "react-router-dom";
import('../../index.css');

export default function JobForm(){
    const [jobForm, setJobForm] = useState({
        company: '',
        location: '',
        position: '',
        date: '',
        status: '',
        service: '',
        contacts: '',
        history: '',
        process: '',
        notes: '',
        technical: ''
    })
    const [isPending, setIsPending] = useState(false);

    const Navigate = useNavigate();

    const handleChange = (e) => {
        setJobForm({...jobForm, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        //prevents page from refreshing
        e.preventDefault();
        
        setIsPending(true);
        
        try{ 
            const res = await fetch("/api/jobs", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(jobForm),
        }); Navigate('/jobs');
        }catch(error) {
            console.error(error)
    } finally {
        setIsPending(false)
    }
}

    return(
        <div className="form-container">
            <form autoComplete="off" onSubmit={handleSubmit}>
            <label className="label">Company </label>
            <input 
            className="input" 
            type="text" 
            name="company" 
            value={jobForm.company}
            onChange={handleChange}
            required />
            <br/>
            <label className="label">Location </label>
            <input 
            className="input" 
            type="text" 
            name="location" 
            value={jobForm.location}
            onChange={handleChange} 
            required />
            <br/>
            <label className="label">Position </label>
            <input 
            className="input" 
            type="text" 
            name="position" 
            value={jobForm.position}
            onChange={handleChange}
            required />
            <br/>
            <label className="label">Date Applied </label>
            <input 
            className="input" 
            type="date" 
            name="date" 
            value={jobForm.date} 
            onChange={handleChange}
            required />
            <br/>
            <label className="label">Status </label>
            <input 
            className="input" 
            type="text" 
            name="status" 
            value={jobForm.status}
            onChange={handleChange} 
            required />
            <br/>
            <label className="label">Application Service </label>
            <input 
            className="input" 
            type="text" 
            name="service" 
            value={jobForm.service}
            onChange={handleChange}
            required />
            <br/>
            <label className="label">Contacts </label>
            <input 
            className="input" 
            type="text" 
            name="contacts" 
            value={jobForm.contacts}
            onChange={handleChange}
            required />
            <br/>
            <label className="label">Meeting History </label>
            <input 
            className="input" 
            type="text" 
            name="history" 
            value={jobForm.history}
            onChange={handleChange}
            required />
            <br/>
            <label className="label">Interview Process </label>
            <input 
            className="input" 
            type="text" 
            name="process" 
            value={jobForm.process}
            onChange={handleChange}
            required />
            <br/>
            <label className="label">Interview Notes </label>
            <input 
            className="input" 
            type="text" 
            name="notes" 
            value={jobForm.notes}
            onChange={handleChange} 
            required />
            <br/>
            <label className="label">Technical Notes </label>
            <input 
            className="input" 
            type="text" 
            name="technical" 
            value={jobForm.technical}
            onChange={handleChange}
            required />
            <br/>
            { !isPending && <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..." type="submit">Add Job <FcCheckmark /></button> }
            { isPending && <button disabled className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..." type="submit">Adding Job... <FcCheckmark /></button> }
            </form>
        </div>
    )
}

//TODO: finish out form posting after backend is set up. Make sure user Jobs page renders after new job is added