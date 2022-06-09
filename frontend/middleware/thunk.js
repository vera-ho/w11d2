export const thunk = ({ dispatch, getState }) => next => action => {
    console.log("thunk1")
    if(typeof action === "function") {
        console.log("thunk2")
        return action(dispatch, getState);
    }
    console.log('thunk3')
    return next(action);
}

// function sent to rails?