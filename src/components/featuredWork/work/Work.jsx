import React from 'react'
import "./work.scss"
const Work = ({ work }) => {
  console.log("Public url: " + process.env.PUBLIC_URL)

  return (
    < div className='work' style={{
      backgroundImage: `url(${work.image})`
    }
    } >
      {console.log("in return : " + work.image)}
      <div className='title'>{work.title}</div>
    </div >
  )
}

export default Work
