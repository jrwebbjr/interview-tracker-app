import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DefaultLayout from '../layout/DefaultLayout';

//TODO: Check to see if this route works, either try postman or wait until you get your pagination working

export default function Update(){

    const Navigate = useNavigate();

    // const handleSubmit = async () => {
    //     try{
    //         const res = await axios.put(`/api/jobs/${_id}`, {
    //             status: statusChange
    //         })
    //         Navigate(`/jobs/${_id}`) 
    //     } catch(err) {
    //         console.error(err)
    //     }
    // }
//TODO: FINISH DELETE BUTTON
    const handleDelete = async () => {
        try{
            const res = await axios.delete(`/api/jobs/${_id}`)
            Navigate('/jobs')
        } catch(err){
            console.error(err)
        }
    }

    return (
        <div>
            <DefaultLayout />
            <div>
                <h1> Update your Job </h1>  
                {/* <form className='' onSubmit={handleSubmit} method="POST">
                    <input type="text" onChange={handleChange} value={job.company} name="company" defaultValue={this.props.job.company} />
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
                    <Button onClick={handleClick}>Update</Button>
                    <button onClick={handleDelete}>DELETE</button> 
                </form>   */}
            </div>
        </div>
        
        
    )
}