import React from "react"

const EventTile = (props) => {
  // const title = props.title
  // const timePeriod = props.timePeriod
  // const description = props.description
  const { title, timePeriod, description, eventType } = props


  let backgroundColor = ""
  if (eventType === "personal") {
    backgroundColor = "green-bg"
  } 
  if (eventType === "business-casual") {
    backgroundColor= "pink-bg"
  } 
  if (eventType === "business") {
    backgroundColor = "blue-bg"
  }

  return(
    <div className={backgroundColor}>
      <h4>{title}</h4>
      <p>{timePeriod}</p>
      <p>{description}</p>
    </div>
  )
}

export default EventTile