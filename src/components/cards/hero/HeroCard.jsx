import React from 'react'
import "./heroCard.scss"

const HeroCard = ({ image }) => {
  return (
    <div className='heroCard'>
      <img src={image} alt="" />
    </div>
  )
}

export default HeroCard
