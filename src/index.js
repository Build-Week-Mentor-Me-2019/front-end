import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// React Router
import { BrowserRouter } from 'react-router-dom';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer/reducer';

const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
