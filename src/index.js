import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// React Router
import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';

// Redux Store
import store from './redux/store/index'; 


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
