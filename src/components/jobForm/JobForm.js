import { useState } from "react";
import { useNavigate } from "react-router-dom";
import('../../App.css');

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
            const response = await fetch("/api/jobs", {
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
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                <label className="label">Company </label>
                <input 
                className="form-input [type='text']" 
                type="text" 
                name="company" 
                value={jobForm.company}
                onChange={handleChange}
                required />
                <br/>
                <label className="label">Location </label>
                <input 
                className="form-input [type='text']"  
                type="text" 
                name="location" 
                value={jobForm.location}
                onChange={handleChange} 
                required />
                <br/>
                <label className="label">Position </label>
                <input 
                className="form-input [type='text']" 
                type="text" 
                name="position" 
                value={jobForm.position}
                onChange={handleChange}
                required />
                <br/>
                <div class="flex items-center justify-center">
                    <div class="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
                        <input type="text"
                        value={jobForm.date}
                        onChange={handleChange}
                        required
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Select a date" />
                        <label for="floatingInput" class="text-gray-700">Select a date</label>
                        <button class="datepicker-toggle-button" data-mdb-toggle="datepicker">
                        <i class="fas fa-calendar datepicker-toggle-icon"></i>
                        </button>
                    </div>
                </div>
                <br/>
                <label className="label">Status </label>
                <input 
                className="form-input [type='text']"  
                type="text" 
                name="status" 
                value={jobForm.status}
                onChange={handleChange} 
                required />
                <br/>
                <label className="label">Application Service </label>
                <input 
                className="form-input [type='text']" 
                type="text" 
                name="service" 
                value={jobForm.service}
                onChange={handleChange}
                required />
                <br/>
                <label className="label">Contacts </label>
                <input 
                className="form-input [type='text']"  
                type="text" 
                name="contacts" 
                value={jobForm.contacts}
                onChange={handleChange}
                required />
                <br/>
                <label className="label">Meeting History </label>
                <input 
                className="form-input [type='text']"  
                type="text" 
                name="history" 
                value={jobForm.history}
                onChange={handleChange}
                required />
                <br/>
                <label className="label">Interview Process </label>
                <input 
                className="form-input [type='text']" 
                type="text" 
                name="process" 
                value={jobForm.process}
                onChange={handleChange}
                required />
                <br/>
                <label className="label">Interview Notes </label>
                <input 
                className="form-input [type='text']"  
                type="text" 
                name="notes" 
                value={jobForm.notes}
                onChange={handleChange} 
                required />
                <br/>
                <label className="label">Technical Notes </label>
                <input 
                className="form-input [type='text']"  
                type="text" 
                name="technical" 
                value={jobForm.technical}
                onChange={handleChange}
                required />
                <br/>
                { !isPending && <button className="button" type="submit">Add Job</button> }
                { isPending && <button disabled className="button" type="submit">Adding Job... </button> }
                </form>
            </div>
        </div>
        
    )
}
