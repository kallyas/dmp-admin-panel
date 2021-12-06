import { combineReducers } from "redux";

// TODO: Import Reducers
import loginReducer from "./login/loginSlice"
import vendorReducer from "./vendor/vendorSlice";

const rootReducer = combineReducers({
    // TODO: Register Reducers
    login: loginReducer,
    vendor: vendorReducer
})

export default rootReducer;