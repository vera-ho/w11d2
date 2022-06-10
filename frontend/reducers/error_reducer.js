import { RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/error_actions";

const errorReducer = (state = [], action) => {
    Object.freeze(state);
    // let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ERRORS:
            let nextActionErrors = {};
            Object.values(action.errors).forEach( error => {
                nextActionErrors[error.id] = error
                console.log(error);
            })
            return nextActionErrors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}