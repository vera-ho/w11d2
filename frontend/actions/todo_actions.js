export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO"

export const receiveTodos = (todos) => {
    return {
      type: RECEIVE_TODOS,
      todos,
    };
};

export const receiveTodo = (todo) => {
    // debugger
    console.log('receive todo')
    return {
        type: RECEIVE_TODO,
        todo,
    }
}
export const removeTodo = (todo) => {
    // debugger
    console.log("remove todo")
    return {
        type: REMOVE_TODO,
        todo,
    }
}

