import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import { motion } from 'framer-motion';

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
    setError('Log In Failed Try Again or Sign Up if You Are A New User');
  }
}

return (
  <main className='w-screen h-screen'>
    <motion.div 
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ ease: 'easeIn', duration: 1 }}
    className='flex justify-center items-center'>
      <div className='flex flex-col justify-center h-max w-max'>
        <div className="h-max w-max flex justify-center items-center rounded-lg shadow-xl bg-white border-2 border-indigo-600">
          <form className="h-max w-max flex flex-col justify-center m-10" autoComplete="off" onSubmit={handleSubmit}>
            <div className=' mb-5 '> 
                <label className='flex'>Email </label>
                <input className="shadow-xl rounded-lg" type="text" name="email" value={credentials.email} onChange={handleChange} required /></div>
            <div className=' mt-5 '>
                <label className="flex">Password </label>
                <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
            </div>
            <div className='flex justify-center m-10'>
                <button className="flex px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="submit">LOG IN</button>
            </div>
            <p className="m-10 p-10 flex justify-center items-center rounded-lg shadow-xl">&nbsp;{error}</p>
          </form>
        </div>
      </div>
    </motion.div>
  </main>
);
}