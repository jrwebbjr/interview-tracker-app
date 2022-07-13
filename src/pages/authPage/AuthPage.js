import { useState } from 'react';
import '../../App.css';
import LoginForm from '../../components/loginForm/LoginForm';
import SignUpForm from '../../components/signUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className='w-screen h-screen overflow-hidden'>
      <div className='flex flex-col items-center'>
        <h1 className='text-white font-serif text-8xl mt-20'>Welcome to Apply!</h1>
        <h2 className='text-white font-serif text-3xl mt-10'>Already a user? Please log in below to see your jobs.</h2>
      </div>
      <div className='bg-yellow-600 h-10 w-10 '>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}