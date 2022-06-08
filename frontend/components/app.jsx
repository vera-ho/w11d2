import React from "react"
import TodoListContainer from "./todos/todo_list_container"
import TodoFormContainer from "./todos/todo_form_container"
const App = () => {
    return (
        <div>
            <h1>todos</h1>
            <TodoListContainer/>
            <TodoFormContainer/>
        </div>
    )
}
export default App;