import React from 'react'
import "./home.scss"
import HeroCard from "../../components/cards/hero/HeroCard"
import Card from '../../components/cards/imageCard/Card'
import sampleImg from "../../assets/images/sampleImg.jpg"
import orangeAndRed from "../../assets/images/orangeAndRed.jpg"
import Works from '../../components/featuredWork/works/Works'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <HeroCard image={orangeAndRed} />
      <Card odd={true} image={sampleImg} title="ALL ABOUT BRANDS." details="At OYG, we offer authentic the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available." />
      <Card odd={false} image={sampleImg} title="ARMED WITH EXPERIENCE." details="At OYG, we offer authentic the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available." />
      <Card odd={true} image={sampleImg} title="BACKED BY TRUST." details="At OYG, we offer authentic the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available." />
      <Works />

      <Footer />

    </div>
  )
}

export default Home
