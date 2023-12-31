import { applyMiddleware, createStore } from "redux";
import fitnessReducer from "../Reducers/fitnessReducer";
import thunk from "redux-thunk";

const store = createStore(fitnessReducer, applyMiddleware(thunk));

export default store;
