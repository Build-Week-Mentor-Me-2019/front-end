import React from 'react';
import './App.css';
import Answer from './components/Answers/Answer'
// Protected Route
import ProtectedRoute from './components/utils/ProtectedRoute';


// Browser Router
import { Route, Switch, withRouter } from 'react-router-dom';

// Components
import Login from './components/UserAuth/Login';
import QuestionsList from './components/Questions/QuestionsList';
import SignUp from './components/UserAuth/SignUp';


function App ()
{
    return (
        <div className="App">
            <h1>App.js</h1>
            {/* <SignUp /> */}

            <Answer />
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <ProtectedRoute exact path="/questions" component={QuestionsList} />
        </div>
    );
}

export default withRouter(App);