import React from 'react'
import Card from './Card';
import img from '../assets/images/user7.jpeg'

const CardGroup = () => {
  return (

    <div class="container">
      <div class="row">
        <div class="col-sm">
          <Card Image={img} name="Ankit Kumar" desc="A handsome and charming college student." />
        </div>
        <div class="col-sm">
          <Card Image={img} name="Ankit Kumar" desc="A handsome and charming college student." />
        </div>
        <div class="col-sm">
          <Card Image={img} name="Ankit Kumar" desc="A handsome and charming college student." />
        </div>
      </div>
    </div>
  )
}

export default CardGroup