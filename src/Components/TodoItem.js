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
        console.log(this.props.todo.todo)
        return(
            <div className="todo-item">
                {/* <p style={{display: !this.props.todo && "none"}}>{this.props.todo}</p> */}
                {/* <p>{this.props.todo}</p> */}
                {this.props.todo.todo}
            <input type="checkbox" checked={this.props.todo.completed} onChange={() => console.log("chenged")}/> 
            </div>
        )
    }
}

// TodoItem.defaultProps = {
//     todo: 'http://i.imgur.com/bJw8ndW.png'
//   }