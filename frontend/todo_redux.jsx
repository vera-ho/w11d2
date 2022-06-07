import configureStore from "./store/store";
import { receiveTodos, receiveTodo, removeTodo, } from "../frontend/actions/todo_actions"
import { receiveStep,receiveSteps, removeStep } from "../frontend/actions/step_actions"


document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo
    window.receiveStep = receiveStep
    window.receiveSteps = receiveSteps
    window.removeStep = removeStep
    
})
