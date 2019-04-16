import { combineReducers } from "redux/index";
import baseReducer from "./base.reducer";

export default combineReducers({
    base: baseReducer
});
