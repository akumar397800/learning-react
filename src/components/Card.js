import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
      <div className='body'>
            <div className='heading'>{props.Heading}
            </div>
            <img src={props.Image} alt="" className='Image' />
            <h2 >{props.name}</h2>
            <p>{ props.desc}</p>
      </div>
  )
}

export default Card