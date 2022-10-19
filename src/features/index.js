import { combineReducers } from "redux";
import loginReducer from "./login/loginSlice"
import vendorReducer from "./vendor/vendorSlice";
import routeReducer from "./routes/routesSlice";
import staffReducer from "./staff/staffSlice";
import tripReducer from "./trips/tripsSlice";

const rootReducer = combineReducers({
    login: loginReducer,
    vendor: vendorReducer,
    routes: routeReducer,
    staff: staffReducer,
    trips: tripReducer
})

export default rootReducer;