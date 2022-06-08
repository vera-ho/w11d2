import React from "react"
import TodoListItem from "./todo_list_item"

const TodoList = (props)=> {
    // debugger
    return (
        <div>
            <h1>all todos</h1>
            <ul>
                {
                    props.todos.map(todo => { 
                        return (
                            <TodoListItem 
                                receiveTodo={props.receiveTodo}
                                removeTodo={props.removeTodo}
                                todo={todo}
                                key={todo.id} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList