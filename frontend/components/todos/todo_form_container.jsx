import {connect} from "react-redux"
import { receiveTodo, createToDo } from "../../actions/todo_actions"
import todoForm from "./todo_form"

const mSTP = state => {
    return {
    }
}
const mDTP = dispatch => {
    return {
        createToDo: todo => {
            // debugger
            return dispatch(createToDo(todo))
        }
        // receiveTodo: (todo) => {
        //     return dispatch(receiveTodo(todo))
        // }
    }
}
export default connect(mSTP, mDTP)(todoForm)