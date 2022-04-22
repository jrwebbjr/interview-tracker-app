import { useState } from "react";
import { FcCheckmark } from 'react-icons/fc';

export default function LogForm(){
    const [log, setLog] = useState('')
    const [isPending, setIsPending] = useState(false);

    const handleChange = (e) => {
        setLog({...setLog, [e.target]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const job = { company, location, position, date, jobStatus, service, contacts, history, process, notes, technical };

        setIsPending(true);
        

        fetch(`http://localhost:3000/jobs/${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(job)
        }).then(() => {
            console.log("new job added");
            setIsPending(false);
        })
    }

    return(
        <div className="form-container">
            <form autoComplete="off" onSubmit={handleSubmit}>
            <label className="label">Company </label>
            <input 
            className="input" 
            type="text" 
            name="company" 
            value="company"
            onChange={(e) => setLog(e.target.value) }
            required />
            <br/>
            <label className="label">Location </label>
            <input 
            className="input" 
            type="text" 
            name="location" 
            value="location"
            onChange={(e) => setLog(e.target.value) } 
            required />
            <br/>
            <label className="label">Position </label>
            <input 
            className="input" 
            type="text" 
            name="position" 
            value="position"
            onChange={(e) => setLog(e.target.value) }
            required />
            <br/>
            <label className="label">Date Applied </label>
            <input 
            className="input" 
            type="text" 
            name="date" 
            value="date" 
            onChange={(e) => setLog(e.target.value) }
            required />
            <br/>
            <label className="label">Status </label>
            <input 
            className="input" 
            type="text" 
            name="status" 
            value="status"
            onChange={(e) => setLog(e.target.value) } 
            required />
            <br/>
            <label className="label">Application Service </label>
            <input 
            className="input" 
            type="text" 
            name="application-service" 
            value="service"
            onChange={(e) => setLog(e.target.value) }
            required />
            <br/>
            <label className="label">Contacts </label>
            <input 
            className="input" 
            type="text" 
            name="contacts" 
            value="contacts"
            onChange={(e) => setLog(e.target.value) }
            required />
            <br/>
            <label className="label">Meeting History </label>
            <input 
            className="input" 
            type="text" 
            name="history" 
            value="history"
            onChange={(e) => setLog(e.target.value) }
            required />
            <br/>
            <label className="label">Interview Process </label>
            <input 
            className="input" 
            type="text" 
            name="interview-process" 
            value="process"
            onChange={(e) => setLog(e.target.value) }
            required />
            <br/>
            <label className="label">Interview Notes </label>
            <input 
            className="input" 
            type="text" 
            name="interview-notes" 
            value="notes"
            onChange={(e) => setLog(e.target.value) } 
            required />
            <br/>
            <label className="label">Technical Notes </label>
            <input 
            className="input" 
            type="text" 
            name="technical-notes" 
            value="technical"
            onChange={(e) => setLog(e.target.value) }
            required />
            <br/>
            { !isPending && <button className="button" type="submit">Add Job <FcCheckmark /></button> }
            { isPending && <button disabled className="button" type="submit">Adding Job... <FcCheckmark /></button> }
            </form>
        </div>
    )
}

//TODO: finish out form posting after backend is set up. Make sure user Jobs page renders after new job is added