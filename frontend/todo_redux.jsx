import configureStore from "./store/store";
import { receiveTodos, receiveTodo, removeTodo, fetchToDos } from "../frontend/actions/todo_actions"
// import { receiveStep,receiveSteps, removeStep } from "../frontend/actions/step_actions"
import Root from "../frontend/components/root"
import ReactDOM from "react-dom"
import React from "react"
// import allTodos from "./reducers/selectors"
// import { fetchToDos } from "./util/todo_api_util";


document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const rootElement = document.getElementById("root")
    window.store = store;
    ReactDOM.render(<Root store={store}/>, rootElement);
})
