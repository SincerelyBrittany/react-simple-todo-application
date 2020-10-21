import React, {Component} from 'react'
import TodoItem from './TodoItem'
import todoData from '../todoData.js'

export default class ListContainer extends Component {
    render(){
        const todoComponents = todoData.map(todo => {
            // console.log(todo.id)
           return < TodoItem key={todo.id} todo={todo}  />
        })
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