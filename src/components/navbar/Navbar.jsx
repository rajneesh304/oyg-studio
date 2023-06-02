import React from 'react'
import "./navbar.scss";
import oyg from "../../assets/logo/OYG.png"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        <img src={oyg} alt="" />
      </div>
      <div className='mid'>
        <a href="http://">HOME</a>
        <a href="http://">WORK</a>
        <a href="http://">AI</a>
        <a href="http://">SERVICES</a>
        <a href="http://">ABOUT</a>
        <a href="http://">MORE</a>
        <a href="http://">BLOG</a>
      </div>
      <div className='right'>
        <button>START A PROJECT</button>
      </div>
    </div>
  )
}

export default Navbar
