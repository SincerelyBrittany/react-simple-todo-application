import React, {Component} from 'react'

export default class TodoItem extends Component{
    render(){
        console.log(this.props.todo.todo)
        return(
            <div className="todo-item">
              
                {/* <p style={{display: !this.props.todo && "none"}}>{this.props.todo}</p> */}
                {/* <p>{this.props.todo}</p> */}
                {this.props.todo.todo}
            <input type="checkbox" checked={this.props.todo.completed}/> 
            </div>
        )
    }
}

// TodoItem.defaultProps = {
//     todo: 'http://i.imgur.com/bJw8ndW.png'
//   }