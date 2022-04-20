export default function Form(){
    return(
        <div className="form-container">
            <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Name </label>
            <input className="input" type="text" name="company" value={this.state.name} onChange={handleChange} required />
            <br/>
            <label>Email </label>
            <input className="input" type="email" name="email" value={this.state.email} onChange={thihandleChange} required />
            <br/>
            <label>Password </label>
            <input 
            className="input" 
            type="password" 
            name="password" 
            value={this.state.passwordonChange={handleChange}} 
            required />
            <br/>
            <label>Confirm </label>
            <input className="input" type="password" name="confirm" value={this.state.confirm} onChange={handleChange} required />
            <br/>
            <button className="button" type="submit" disabled={disable}>SIGN UP</button>
            </form>
        </div>
    )
}