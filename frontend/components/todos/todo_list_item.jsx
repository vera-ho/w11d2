import React from "react"
import reactDom from "react-dom";

class TodoListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    removeTodo = (e) => {
        e.preventDefault();
        let id = this.props.todo.id
        this.props.removeTodo({id})
    }

    receiveTodo = (e) => {
        e.preventDefault();
        let status = !this.props.todo.done;
        let newState = Object.assign({}, this.props.todo, {
            done: status
        });

        this.props.receiveTodo(newState)
    }

    render() {

        // debugger
        let text = ""
        if(this.props.todo.done) {
            text = "Undo";
        } else {
            text = "Done";
        }

        return (
        <>
            <li>{this.props.todo.title}</li>
            <button onClick={this.removeTodo}>Delete</button>
            <button onClick={this.receiveTodo}>{text}</button>
        </>
        )
    }

}



// const TodoListItem = (props)=>{
//     // debugger
//     let text = ""
//     if(props.done) {
//         text = "Undo";
//     } else {
//         text = "Done";
//     }

//     return (
//         <>
//             <li>{props.todo.title}</li>
//             <button onClick={removeTodo}>Delete</button>
//             <button onClick={receiveTodo}>{text}</button>
//         </>
//     )
// }
export default TodoListItem;