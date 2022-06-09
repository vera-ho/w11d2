import TodoList from "./todo_list"
import {connect} from "react-redux"
import allTodos from "../../reducers/selectors"
import { fetchToDos, createToDo } from "../../actions/todo_actions";

const mapStateToProps = state => {
    // debugger
    return { todos: allTodos(state) }
};
  
const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo)),
  fetchToDos: todo => dispatch(fetchToDos(todo)),
  createToDo: todo => dispatch(createToDo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);