import React, {Component} from 'react'
import TodoItem from './TodoItem'
import todoData from '../todoData.js'

export default class ListContainer extends Component {
    constructor(){
        super()
        this.state ={
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        console.log("Changed", id)
    }

    render(){
        const todoComponents = this.state.todos.map(todo => {
            // console.log(todo.id)
           return < TodoItem key={todo.id} todo={todo} handleChange={this.handleChange}  />
        })
        // const todoComponents = todoData.map(todo => {
        //     // console.log(todo.id)
        //    return < TodoItem key={todo.id} todo={todo}  />
        // })
        return(
            <div className="todo-list">
                {todoComponents}
            {/* < TodoItem />
            < TodoItem />
            < TodoItem /> */}
            </div>
        )
    }
}