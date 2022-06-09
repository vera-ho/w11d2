export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO"
import * as APIUtil from "../util/todo_api_util.js"

export const receiveTodos = (todos) => {
    console.log("receiveTodos")
    return {
      type: RECEIVE_TODOS,
      todos,
    };
};

export const receiveTodo = (todo) => {
    console.log('receive todo')
    return {
        type: RECEIVE_TODO,
        todo,
    }
}
export const removeTodo = (todo) => {
    console.log("remove todo")
    return {
        type: REMOVE_TODO,
        todo,
    }
}

export const fetchToDos = () => (dispatch, getState) => {
    console.log("thunk fetch")
    APIUtil.fetchToDos().then( todos => {
        return dispatch(receiveTodos(todos))
    })
}

