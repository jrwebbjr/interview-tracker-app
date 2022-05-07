import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
const [error, setError] = useState('');
const Navigate = useNavigate();

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await usersService.login(credentials);
    setUser(user);
    Navigate("/index");
  } catch(err) {
    setError('Log In Failed - Try Again');
  }
}

return (
  <div className='flex justify-center'>
    <div className="rounded-lg shadow-xlg bg-white border-2 w-96 p-6 m-10">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label className=''>Email</label>
        <input className="" type="text" name="email" value={credentials.email} onChange={handleChange} required />
        <label className="ml-5">Password</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        <button className="nline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="submit">LOG IN</button>
      </form>
    </div>
    <p className="error-message">&nbsp;{error}</p>
  </div>
);
}