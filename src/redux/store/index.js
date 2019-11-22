import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as loginReducer } from '../reducer/loginReducer';
import thunk from 'redux-thunk';
import postReducer from '../reducer/postReducer';

const initialState = {};

const middleware = [thunk];

const rootReducer = combineReducers({
  posts: postReducer,
  loginRed: loginReducer
});

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;
