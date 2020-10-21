import React, {Component} from 'react'

export default class TodoItem extends Component{

    // handleClick = () => {
    //     console.log("I was clicked", this.props.todo.completed)
    //     if(this.props.todo.completed === false){
    //         this.props.todo.completed = true
    //     } else {
    //         this.props.todo.completed = false
    //     }
    // }

    render(){
        console.log(this.props.todo, "this is props")
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