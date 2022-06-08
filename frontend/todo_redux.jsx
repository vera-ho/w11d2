import configureStore from "./store/store";
import { receiveTodos, receiveTodo, removeTodo, } from "../frontend/actions/todo_actions"
import { receiveStep,receiveSteps, removeStep } from "../frontend/actions/step_actions"
import Root from "../frontend/components/root"
import ReactDOM from "react-dom"
import React from "react"
import allTodos from "./reducers/selectors"


document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo
    window.receiveStep = receiveStep
    window.receiveSteps = receiveSteps
    window.removeStep = removeStep
    const rootElement = document.getElementById("root")
    ReactDOM.render(<Root store={store}/>, rootElement);
    window.allTodos = allTodos(store.getState());
    
})
