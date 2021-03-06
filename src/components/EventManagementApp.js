import React from 'react'
import EventTile from './EventTile'
import DogImage from './DogImage'

const EventManagementApp = () => {
  const events = [
    { title: "Brunch with Werewolves", timePeriod: "10:00am - 12:00pm", description: "Don't do on a full moon", eventType: "personal" },
    { title: "Strategy Meeting with the Finfolk on New Import Tariffs", timePeriod: "1:00pm - 2:00pm", description: "The World Wizardry Workgroup hit us hard on these tariffs.", eventType: "business" },
    { title: "Award Ceremony for Amrita the Banshee", timePeriod: "2:00pm - 3:00pm", description: "Bring earplugs, have fun.", eventType: "business-casual" },
    { title: "Djinn Tech Support with the Qamar and Caliope", timePeriod: "4:00pm - 5:00pm", description: "Computers are down, let them work their magic.", eventType: "business" }
  ]

  let eventsList = events.map(event => {
    let background = "event-tile"
    debugger
    if (event.eventType === "personal"){
      background = "green-bg"
    } else if(event.eventType === "business-casual"){
      background = "pink-bg"
    } else if (event.eventType === "business"){
      background = "blue-bg"
    }

    return(
      <EventTile 
        title={event.title}
        timePeriod={event.timePeriod}
        description={event.description}
        tileBackground={background}
        randomProp="thisis a prop"
      />
    )
  })

  return(
    <div className="event-management-app">
      <h1>Now viewing your upcoming events</h1>
      {eventsList}
      <DogImage />
    </div>
  )
}

export default EventManagementApp