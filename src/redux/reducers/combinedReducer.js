import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const combinedReducer = combineReducers({
  todo: todoReducer,
});

export default combinedReducer;
