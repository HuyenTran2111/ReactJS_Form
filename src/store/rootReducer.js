import { combineReducers } from "redux";
import QuanLySVReducer from "./quanLySVReducer";

const rootReducer = combineReducers({
    // quan ly child reducer
    QuanLySVReducer,
});

export default rootReducer;