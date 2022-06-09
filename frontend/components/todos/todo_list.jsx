import React from "react"
import TodoListItem from "./todo_list_item"

export default class TodoList extends React.Component {
   constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.props.fetchToDos(); 
    }

    render() {

        
        return (
            <div>
                <h1>all todos</h1>
                <ul>
                    {
                        this.props.todos.map( todo => { 
                            return (
                                <TodoListItem 
                                    receiveTodo={this.props.receiveTodo}
                                    removeTodo={this.props.removeTodo}
                                    todo={todo}
                                    key={todo.id} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


// const TodoList = (props)=> {
//     // debugger
//     return (
//         <div>
//             <h1>all todos</h1>
//             <ul>
//                 {
//                     props.todos.map(todo => { 
//                         return (
//                             <TodoListItem 
//                                 receiveTodo={props.receiveTodo}
//                                 removeTodo={props.removeTodo}
//                                 todo={todo}
//                                 key={todo.id} />
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }

// export default TodoList