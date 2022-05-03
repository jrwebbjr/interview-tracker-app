import ('../App.css');
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DefaultLayout from ('../layout/DefaultLayout');
//TODO: Check to see if this route works, either try postman or wait until you get your pagination working
export default function Update(){
    const Navigate = useNavigate();

    const handleClick = async () => {
        try{
            const res = await axios.put('/api/jobs/')
            Navigate(`/jobs/${_id}`) 
        } catch(err) {
            console.error(err)
        }
    }
//TODO: FINISH DELETE BUTTON
    const handleDelete = 

    return (
        <div>
            <DefaultLayout />
            <div>
                <h1> Update your App-ly </h1>  
                <form className='' onSubmit={handleSubmit} method="POST">
                    <input type="text" name="company" defaultValue={this.props.job.company} />
                    <input type="text" name="location" defaultValue={this.props.job.location} />  
                    <input type="text" name="position" defaultValue={this.props.job.position} /> 
                    <input type="text" name="date" defaultValue={this.props.job.date} />   
                    <input type="text" name="status" defaultValue={this.props.job.status} />  
                    <input type="text" name="applicationService" 
                    defaultValue={this.props.job.applicationService} />   
                    <input type="text" name="contacts" defaultValue={this.props.job.contacts} />  
                    <input type="text" name="history" defaultValue={this.props.job.history} />  
                    <input type="text" name="interviewProcess" 
                    defaultValue={this.props.job.interviewProcess} />  
                    <input type="text" name="interviewNotes" defaultValue={this.props.job.interviewNotes} />  
                    <input type="text" name="technicalNotes" defaultValue={this.props.job.technicalNotes} /> 
                    <input type="submit" value="Update" />
                    <Button onClick={handleClick}>Update</Button>
                    <button onClick={handleDelete}>DELETE</button> 
                </form>  
            </div>
        </div>
        
        
    )
}