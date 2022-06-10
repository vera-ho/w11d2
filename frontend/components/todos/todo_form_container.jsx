import {connect} from "react-redux"
import { receiveTodo, createTodo } from "../../actions/todo_actions"
import todoForm from "./todo_form"

const mSTP = state => {
    return {
    }
}
const mDTP = dispatch => {
    return {
        createTodo: todo => {
            return dispatch(createTodo(todo))
        }
        // receiveTodo: (todo) => {
        //     return dispatch(receiveTodo(todo))
        // }
    }
}
export default connect(mSTP, mDTP)(todoForm)