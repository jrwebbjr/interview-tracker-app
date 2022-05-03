import ('../App.css');
import DefaultLayout from ('../layout/DefaultLayout');

export default function Update(){
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
                </form>  
            </div>
        </div>
        
        
    )
}