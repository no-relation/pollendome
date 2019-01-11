import { users_reducer } from "./users_reducer"

export const rootReducer = function(currentState, action){
    let newState = { ...currentState }
    newState = users_reducer(currentState, action)

    return newState
}