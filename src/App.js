import React from 'react';
import './App.css';

// Protected Route
import ProtectedRoute from './components/utils/ProtectedRoute';


// Browser Router
import {  Link, Route } from 'react-router-dom';

// Components
import Login from './components/UserAuth/Login';
import QuestionsList from './components/Questions/QuestionsList';


function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
    
    <Route exact path="/" component={Login} />
    <ProtectedRoute exact path="/questions" component={QuestionsList} />
    </div>
  );
}

export default App;