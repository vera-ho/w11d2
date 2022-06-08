import React from "react"
import TodoListItem from "./todo_list_item"
const TodoList = (props)=> {
    return (
        <div>
            <h1>all todos</h1>
            <ul>
                {
                    props.todos.map(todo=>TodoListItem(todo))
                }
            </ul>
        </div>
    )
}
export default TodoList