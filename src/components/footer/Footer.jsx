import React from 'react'
import "./footer.scss"
import { useNavigate } from "react-router-dom";

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  const navigate = useNavigate();
  const gotoContact = () => {
    navigate('/contactUs')
  }
  const gotoWork = () => {
    navigate('/work')
  }
  const gotoHome = () => {
    navigate('/')
  }


  return (
    <div className='footer'>
      <div className="button">
        <button>
          START A PROJECT
        </button>
      </div>
      <div className="title">
        YOUR BUSINESS DESERVE NOTHING BUT THE ABSOLUTE BEST.
      </div>
      <div className="detail">At OYG Studio, we take care of that. </div>
      <div className="banner">
        <a onClick={gotoHome}>HOME</a>
        <a onClick={gotoWork}>WORK</a>
        <a href="http://">AI</a>
        <a href="http://">SERVICES</a>
        <a href="http://">ABOUT</a>
        <a href="http://">MORE</a>
        <a href="http://">BLOG</a>
        <a onClick={gotoContact}>CONTACT</a>
      </div>
      <div className='bottom'>
        <div className="socials">
          <a href=''><FacebookIcon fontSize='large' /></a>
          <a href=''><LinkedInIcon fontSize='large' /></a>
          <a href=''><YouTubeIcon fontSize='large' /></a>
        </div>
        <div className="copyright">
          <p>© Copyright 2022-2023 Own Your Gig Studio
            <br />Website developed in-house with ♥</p>
        </div>
      </div>
    </div >
  )
}

export default Footer
