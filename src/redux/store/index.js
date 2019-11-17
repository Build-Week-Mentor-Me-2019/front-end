import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as loginReducer } from "../reducer/loginReducer";
import thunk from "redux-thunk";

const initialState = {};

const middleware = [thunk];

const rootReducer = combineReducers({
  loginRed: loginReducer
});

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;