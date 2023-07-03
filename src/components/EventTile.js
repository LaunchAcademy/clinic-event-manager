import React, { useState } from "react"


const EventTile = (props) => {
    // console.log("Props of EventTile", props)

    let eventTypeClassName = null
    if (props.eventTypeString === "personal") {
        eventTypeClassName = "green-bg"
    } 

    if (props.eventTypeString === "business") {
        eventTypeClassName = "blue-bg"
    }

    if (props.eventTypeString === "business-casual") {
        eventTypeClassName = "pink-bg"
    }

    // let completedStatus = false 


    const [completedStatus, setCompletedStatus] = useState(false)

    const changeCompletedStatus = () => {
        setCompletedStatus(true)
        //    completedStatus = true
    }

    if (completedStatus === true) {
        eventTypeClassName = "gray-bg"
    }

   


    return (
        <div className={eventTypeClassName}>

            <h3>
                {props.titleString}
            </h3>

            <p>
                {props.timePeriodString}
            </p>

            <p> {props.descriptionString} </p>

            <button onClick={changeCompletedStatus}>
                Complete Event
            </button>

        </div>
    )
}

export default EventTile