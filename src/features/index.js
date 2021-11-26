import { combineReducers } from "redux";

// TODO: Import Reducers
import loginReducer from "./login/loginSlice"

const rootReducer = combineReducers({
    // TODO: Register Reducers
    login: loginReducer
})

export default rootReducer;