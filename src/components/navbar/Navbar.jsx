import React from 'react'
import "./navbar.scss";
import oyg from "../../assets/logo/OYG.png"
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const gotoContact = () => {
    navigate('/contactUs')
  }
  const gotoHome = () => {
    navigate('/')
  }
  return (
    <div className='navbar'>
      <div className='left'>
        <img src={oyg} alt="" />
      </div>
      <div className='mid'>
        <a onClick={gotoHome}>HOME</a>
        <a href="http://">WORK</a>
        <a href="http://">AI</a>
        <a href="http://">SERVICES</a>
        <a href="http://">ABOUT</a>
        <a href="http://">MORE</a>
        <a href="http://">BLOG</a>
      </div>
      <div className='right'>
        <button onClick={gotoContact}>START A PROJECT</button>
      </div>
    </div>
  )
}

export default Navbar
