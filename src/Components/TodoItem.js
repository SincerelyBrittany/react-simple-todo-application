import React, {Component} from 'react'

export default class TodoItem extends Component{
    render(){
        return(
            <div className="todo-item">
            <p>{this.props.todo.id} </p>
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