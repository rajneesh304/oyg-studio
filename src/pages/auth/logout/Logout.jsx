import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import "./logout.scss"

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
      console.log("Signed out successfully")
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='logout'>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Logout
