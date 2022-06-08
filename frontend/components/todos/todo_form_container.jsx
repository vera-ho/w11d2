import {connect} from "react-redux"
import { receiveTodo } from "../../actions/todo_actions"
import todoForm from "./todo_form"

const mSTP = state => {
    return {
    }
}
const mDTP = dispatch => {
    return {
        receiveTodo: (todo) => {
            return dispatch(receiveTodo(todo))
        }
    }
}
export default connect(mSTP, mDTP)(todoForm)