export default function LogForm(){
    return(
        <div className="form-container">
            <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Company </label>
            <input 
            className="input" 
            type="text" 
            name="company" 
            value=""
            onChange={handleChange} 
            required />
            <br/>
            <label>Location </label>
            <input 
            className="input" 
            type="text" 
            name="location" 
            value=""
            onChange={handleChange} 
            required />
            <br/>
            <label>Position </label>
            <input 
            className="input" 
            type="text" 
            name="position" 
            value=""
            onChange={handleChange} 
            required />
            <br/>
            <label>Date Applied </label>
            <input 
            className="input" 
            type="text" 
            name="date" 
            value="" 
            required />
            <br/>
            <label>Status </label>
            <input 
            className="input" 
            type="text" 
            name="status" 
            value=""
            onChange={handleChange} 
            required />
            <br/>
            <label>Career Service Used </label>
            <input 
            className="input" 
            type="text" 
            name="career service used" 
            value=""
            onChange={handleChange} 
            required />
            <br/>
            <label>Contacts </label>
            <input 
            className="input" 
            type="text" 
            name="contacts" 
            value=""
            onChange={handleChange} 
            required />
            <br/>
            <label>History </label>
            <input 
            className="input" 
            type="text" 
            name="history" 
            value=""
            onChange={handleChange} 
            required />
            <br/>
            <label>Interview Process </label>
            <input 
            className="input" 
            type="text" 
            name="interview process" 
            value=""
            onChange={handleChange} 
            required />
            <br/>
            <label>Interview Notes </label>
            <input 
            className="input" 
            type="text" 
            name="interview notes" 
            value=""
            onChange={handleChange} 
            required />
            <br/>
            <label>Technical Review </label>
            <input 
            className="input" 
            type="text" 
            name="technical review" 
            value=""
            onChange={handleChange} 
            required />
            <br/>
            <button className="button" type="submit">Submit Log</button>
            </form>
        </div>
    )
}