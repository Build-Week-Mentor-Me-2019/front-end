import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// React Router
import { BrowserRouter } from 'react-router-dom';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer/reducer';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
