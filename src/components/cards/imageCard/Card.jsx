import React from 'react'
import './card.scss'
const OddCard = ({ odd, image, title, details }) => {
  if (odd === true) {
    return (
      <div className='card'>
        <div className='image'>
          <img src={image} alt="" />
        </div>
        <div className="text">
          <div className="title">
            {title}
          </div>
          <div className="details">
            {details}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='card'>
      <div className="text">
        <div className="title">
          {title}
        </div>
        <div className="details">
          {details}
        </div>
      </div>
      <div className='image'>
        <img src={image} alt="" />
      </div>

    </div>
  )
}

export default OddCard
