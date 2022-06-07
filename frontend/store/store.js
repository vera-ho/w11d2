import { createStore } from "redux";
import rootReducer from "../reducers/root_reducer";

const configureStore = () => {
    return createStore(rootReducer)
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