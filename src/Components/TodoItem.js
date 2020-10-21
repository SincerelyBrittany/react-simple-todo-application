import React, {Component} from 'react'

export default class TodoItem extends Component{
    render(){
        const completedStyle = {
            fontStyle: "italic",
            color: "red",
            textDecoration: "line-through"
        }
        return(
            <div className="todo-item">
            <p style={this.props.todo.completed ? completedStyle: null}>{this.props.todo.todo} </p>
            <input type="checkbox" 
            checked={this.props.todo.completed} 
            onChange={() => this.props.handleChange(this.props.todo.id)}/> 
            </div>
        )
    }
}

// TodoItem.defaultProps = {
//     todo: 'http://i.imgur.com/bJw8ndW.png'
//   }