import TodoList from "./todo_list"
import {connect} from "react-redux"
import allTodos from "../../reducers/selectors"
const mapStateToProps = state => ({
    todos: allTodos(state)
  });
  
  const mapDispatchToProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList);