import { combineReducers } from "redux";

// TODO: Import Reducers
import loginReducer from "./login/loginSlice"
import vendorReducer from "./vendor/vendorSlice";
import routeReducer from "./routes/routesSlice";
import staffReducer from "./staff/staffSlice";

const rootReducer = combineReducers({
    // TODO: Register Reducers
    login: loginReducer,
    vendor: vendorReducer,
    routes: routeReducer,
    staff: staffReducer
})

export default rootReducer;