import React, {Component} from 'react'

export default class TodoItem extends Component{
    render(){
        return(
            <div className="todo-item">
                <p>{this.props.todo}</p>
            {/* <p> Placeholder text here </p>
            <input type="checkbox"/> */}
            </div>
        )
    }
}