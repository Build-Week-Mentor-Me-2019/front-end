import React from 'react';
import './App.css';

// Protected Route
import ProtectedRoute from './components/utils/ProtectedRoute';


// Browser Router
import {  Link, Route, Switch, withRouter } from 'react-router-dom';

// Components
import Login from './components/UserAuth/Login';
import QuestionsList from './components/Questions/QuestionsList';

const token = localStorage.getItem('token')

function App() {
  return (

    <div className="App">
      <h1>App.js</h1>
    
      {token ? (<ProtectedRoute exact path="/questions" component={QuestionsList} />) : (<Route exact path="/" component={Login}/>)}
    </div>
  );
}

export default withRouter(App);