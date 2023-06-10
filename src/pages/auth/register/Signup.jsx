import React, { useState } from 'react';
import "./signup.scss"
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import loginImage from "../../../assets/images/login.jpg"


const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault()

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);
        navigate("/login")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  }

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    const passwordMismatch = document.getElementById("passwordMismatch");
    if (password !== e.target.value) {
      passwordMismatch.style.display = 'block';
    }
    else {
      passwordMismatch.style.display = 'none';
    }
  }

  return (

    <div className='signUp'>
      <div className="containerWithImage">
        <img src={loginImage} alt="" />
        <div className="container">
          <form>
            <input
              className='email'
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email address"
            />
            <input
              className='password'
              type="password"
              label="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
            <input
              className='password'
              type="password"
              label="Confirm password"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              required
              placeholder="Confirm Password"
            />
            <label id='passwordMismatch'>Password and confirm password do not match!</label>
            <button
              type="submit"
              onClick={onSubmit}
            >
              Sign up
            </button>

          </form>

          <p>
            Already have an account?{' '}
            <NavLink to="/login" >
              Sign in
            </NavLink>
          </p>
        </div>
      </div>
    </div>

  )
}

export default Signup