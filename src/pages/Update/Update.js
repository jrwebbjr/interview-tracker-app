import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Update(){
    const [job,setJob] = useState({
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
    });

    const Navigate = useNavigate();

    const handleChange = (e) => {
        setJob({...setJob, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        //prevents page from refreshing
        e.preventDefault();
        
        try{ 
            const response = await fetch("/api/jobs", {
            method: "PUT",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(job),
        }); Navigate('/jobs');
        }catch(error) {
            console.error(error)
    } 
}

    return (
        <div>
            <div>
                <h1> Update your Job </h1>  
                <form className='' onSubmit={handleSubmit} method="PUT">
                    <input type="text" onChange={handleChange} value={this.props.job.company} name="company" defaultValue={this.props.job.company} />
                    <input type="text" onChange={handleChange} value={job.location} name="location" defaultValue={this.props.job.location} />  
                    <input type="text" onChange={handleChange} value={job.position} name="position" defaultValue={this.props.job.position} /> 
                    <input type="text" onChange={handleChange} value={job.date} name="date" defaultValue={this.props.job.date} />   
                    <input type="text" onChange={handleChange} value={job.status} name="status" defaultValue={this.props.job.status} />  
                    <input type="text" onChange={handleChange} value={job.applicationService} name="applicationService" 
                    defaultValue={this.props.job.applicationService} />   
                    <input type="text" onChange={handleChange} value={job.contacts} name="contacts" defaultValue={this.props.job.contacts} />  
                    <input type="text" onChange={handleChange} value={job.history} name="history" defaultValue={this.props.job.history} />  
                    <input type="text" onChange={handleChange} value={job.interviewProcess} name="interviewProcess" 
                    defaultValue={this.props.job.interviewProcess} />  
                    <input type="text" onChange={handleChange} value={job.interviewNotes} name="interviewNotes" defaultValue={this.props.job.interviewNotes} />  
                    <input type="text" onChange={handleChange} value={job.technicalNotes} name="technicalNotes" defaultValue={this.props.job.technicalNotes} /> 
                    <input type="submit" value="Update" />
                    {/* <Button onClick={handleClick}>Update</Button> */}
                </form>  
            </div>
        </div>
        
        
    )
}