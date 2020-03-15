import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import newsReducer from "./newsReducer";

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25
    })) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  news: newsReducer
});

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
export default store;
