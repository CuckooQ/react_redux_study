import combinedReducer from "./reducers/combinedReducer";
import { createStore } from "redux";

const store = createStore(combinedReducer);

export default store;
