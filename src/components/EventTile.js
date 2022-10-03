import React from "react"

const EventTile = (props) => {
// debugger
  let eventClass
  if (props.eventType == "business") {
    eventClass = "blue-bg"
  } else if (props.eventType == "personal") {
    eventClass = "green-bg"
  } else if (props.eventType == "business-casual") {
    eventClass = "pink-bg"
  }

  return (
    <div className={`${eventClass} event-tile `}>
      <h3>{props.title}</h3>
      <p>{props.timePeriod}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default EventTile