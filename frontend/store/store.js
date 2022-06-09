import { createStore } from "redux";
import rootReducer from "../reducers/root_reducer";
import { applyMiddleware } from "redux";
import { thunk } from "../middleware/thunk";

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk))
}

export default configureStore;

const newTodos = {
    2: {
      id: 2,
      title: "wash dog",
      body: "with chicken",
      done: true
    },
    3: {
        id: 3,
        title: "bake cookies",
        body: "with lots of sugar",
        done: false
    }
  };