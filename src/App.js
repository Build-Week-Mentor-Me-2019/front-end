import React from 'react';
import './App.css';

// Protected Route
import ProtectedRoute from './components/utils/ProtectedRoute';


// Browser Router
import {  Route, Switch, withRouter, NavLink } from 'react-router-dom';

// Components
import Login from './components/UserAuth/Login';
import QuestionsList from './components/Questions/QuestionsList';
import SignUp from './components/UserAuth/SignUp';


function App() {
  return (
    <div className="App">
      <nav className="navbar bg-primary">
          <NavLink to="/"><h1>Mentor Me</h1></NavLink>

          <div>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </div>
      </nav>

      
      {/* <SignUp /> */}
      {/* <QuestionsList /> */}
    <Route exact path="/" component={QuestionsList} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    
    </div>
  );
}

export default withRouter(App);