import React from 'react'
import DogImage from './DogImage'

const EventTile = (props) =>{

  return(
    <div className={props.tileBackground}>
      <h1>{props.title}</h1>
      <p>{props.timePeriod}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default EventTile