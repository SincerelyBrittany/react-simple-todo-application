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
        this.setState(prevState => {
            const updateTodos = prevState.todos.map(todo => {
                if (todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updateTodos
            }
        })
    }

    render(){
        const todoComponents = this.state.todos.map(item => < TodoItem key={item.id} todo={item} handleChange={this.handleChange}  />)
        return(
            <div className="todo-list">
                {todoComponents}
            </div>
        )
    }
}