import { createStore, applyMiddleware } from "redux";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

const reducer = combineReducers({
  auth: authReducer
});
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export default store;
