import React from 'react'
import "./mCard.scss"

const mCard = ({ image }) => {
  return (
    <div className='mCard'>
      <img src={image} alt="" />
    </div>
  )
}

export default mCard
