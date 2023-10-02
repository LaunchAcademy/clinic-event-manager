import React from 'react';

const EventTile = (props) => {
  // console.log("event tile!!");
  // console.log(props);
  // debugger

  let eventOutfitClass = ""
  if (props.eventObject.eventType === "personal") {
    eventOutfitClass = "green-bg"
  }

  if (props.eventObject.eventType === "business-casual") {
    eventOutfitClass = "pink-bg"
  }
  
  if (props.eventObject.eventType === "business") {
    eventOutfitClass = "blue-bg"
  }

  return (
    <div className={eventOutfitClass}>
      <p>{props.eventObject.title}</p>
      <p>Time: {props.eventObject.timePeriod}</p>
      <p>{props.eventObject.description}</p>
    </div>
  )
}

export default EventTile