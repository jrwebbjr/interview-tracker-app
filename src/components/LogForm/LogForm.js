import { FcCheckmark } from 'react-icons/fc';

export default function LogForm(){

    return(
        <div className="form-container">
            <form autoComplete="off" onSubmit="">
            <label className="label">Company </label>
            <input 
            className="input" 
            type="text" 
            name="company" 
            value=""
            onChange=""
            required />
            <br/>
            <label className="label">Location </label>
            <input 
            className="input" 
            type="text" 
            name="location" 
            value=""
            onChange="" 
            required />
            <br/>
            <label className="label">Position </label>
            <input 
            className="input" 
            type="text" 
            name="position" 
            value=""
            onChange=""
            required />
            <br/>
            <label className="label">Date Applied </label>
            <input 
            className="input" 
            type="text" 
            name="date" 
            value="" 
            required />
            <br/>
            <label className="label">Status </label>
            <input 
            className="input" 
            type="text" 
            name="status" 
            value=""
            onChange="" 
            required />
            <br/>
            <label className="label">Career Service Used </label>
            <input 
            className="input" 
            type="text" 
            name="career service used" 
            value=""
            onChange=""
            required />
            <br/>
            <label className="label">Contacts </label>
            <input 
            className="input" 
            type="text" 
            name="contacts" 
            value=""
            onChange=""
            required />
            <br/>
            <label className="label">History </label>
            <input 
            className="input" 
            type="text" 
            name="history" 
            value=""
            onChange=""
            required />
            <br/>
            <label className="label">Interview Process </label>
            <input 
            className="input" 
            type="text" 
            name="interview process" 
            value=""
            onChange="" 
            required />
            <br/>
            <label className="label">Interview Notes </label>
            <input 
            className="input" 
            type="text" 
            name="interview notes" 
            value=""
            onChange="" 
            required />
            <br/>
            <label className="label">Technical Review </label>
            <input 
            className="input" 
            type="text" 
            name="technical review" 
            value=""
            onChange="" 
            required />
            <br/>
            <button className="button" type="submit">Submit <FcCheckmark /></button>
            </form>
        </div>
    )
}