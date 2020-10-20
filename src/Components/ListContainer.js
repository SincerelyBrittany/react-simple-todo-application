import React, {Component} from 'react'

export default class ListContainer extends Component {
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
            {/* <ul>
                <li>1</li>
                <li>2</li>
            </ul> */}

            <h3 style={{color: "red", backgroundColor: "pink"}}> Good {timeOfDay} </h3>
            {/* <input type="checkbox"/>
            <p> Placeholder text here </p>
            <input type="checkbox"/>
            <p> Placeholder text here </p>
            <input type="checkbox"/>
            <p> Placeholder text here </p> */}
            </div>
        )
    }
}