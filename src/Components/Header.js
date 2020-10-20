import React, { Component } from 'react'

export default class Header extends Component {
    
    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12){
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17){
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }

        return(
            <div>
            <header className="navbar"> Good {timeOfDay}, View Your List Below: </header>
            {/* <h3 style={{color: "red", backgroundColor: "pink"}}> Good {timeOfDay} </h3> */}
            </div>
        )
    }
}

// document.getElementById("something").className += "new-class-name"