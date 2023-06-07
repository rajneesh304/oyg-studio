import React, { useState } from 'react'
import "./login.scss"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase';
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/")
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }

  return (
    <div className='login'>
      <form>
        <input
          id="email-address"
          name="email"
          type="email"
          required
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={onLogin}
        >
          Login
        </button>
      </form>
      <p className="text-sm text-white text-center">
        No account yet? {' '}
        <NavLink to="/register">
          Sign up
        </NavLink>
      </p>
    </div>
  )
}

export default Login
