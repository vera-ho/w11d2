import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions"


const initialState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  };

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);


    switch (action.type) {
        case RECEIVE_TODOS:
            // debugger
            let nextStateTodos = {}
            Object.values(action.todos).forEach( todo => {
                nextStateTodos[todo.id] = todo
            })
            return nextStateTodos;
            // nextState[action.todos] = action.todos;
        case RECEIVE_TODO:
            debugger
            nextState[action.todo.id] = action.todo;
            return nextState;
        case REMOVE_TODO:
            delete nextState[action.todo.id]
            return nextState
        default:
            debugger
            return state;
    }
  };
  
  export default todosReducer;
