import { combineReducers } from "redux";
import { users_reducer } from "./users_reducer"

export const rootReducer = combineReducers({
    users: users_reducer,
})