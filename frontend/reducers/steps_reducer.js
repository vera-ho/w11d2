import { REMOVE_STEP, RECEIVE_STEPS, RECEIVE_STEP } from "../actions/step_actions"


const initialState = 
    {
        todos: {
          1: {
            id: 1,
            title: 'take a shower',
            body: 'and be clean',
            done: false
          }
        },
        steps: {
          1: { // this is the step with id = 1
            id: 1,
            title: 'walk to store',
            done: false,
            todo_id: 1
          },
          2: { // this is the step with id = 2
            id: 2,
            title: 'buy soap',
            done: false,
            todo_id: 1
          }
        }
      }

const stepsReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);


    switch (action.type) {
        case RECEIVE_STEPS:
            console.log("receive steps")
            let nextStateSteps = {}
            Object.values(action.steps).forEach( step => {
                nextStateSteps[step.id] = step
            })
            return nextStateSteps;
        case RECEIVE_STEP:
            console.log("receive_step")
            nextState[action.step.id] = action.step;
            return nextState;
        case REMOVE_STEP:
            console.log("remove step")
            delete nextState[action.step.id]
            return nextState
        default:
            console.log("default step")
            return state;
    }
  };
  
  export default stepsReducer;
