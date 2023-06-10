import React from 'react'
import "./work.scss"
const Work = ({ work }) => {

  return (
    < div className='work' style={{
      backgroundImage: `url(${work.image})`
    }
    } >
      <div className='title'>{work.title}</div>
    </div >
  )
}

export default Work
