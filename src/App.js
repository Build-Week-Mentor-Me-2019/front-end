import React from 'react';
import './App.css';

// Protected Route
// import ProtectedRoute from './components/utils/ProtectedRoute';


// Browser Router
import {  Route, withRouter, NavLink, Link } from 'react-router-dom';

// Components
import Logo from './Assets/Logo.png'
import Login from './components/UserAuth/Login';
import QuestionsList from './components/Questions/QuestionsList';
import SignUp from './components/UserAuth/SignUp';
import AnswerList from './components/Answers/AnswerList';


function App() {
  return (

    <div className="wrapper-main">
      <nav className="navbar">
         <Link to='/'>
         <img src={Logo} alt='site logo' className='logo'/>
         </Link>

          <ul>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          </ul>
      </nav>
<div className='App'>
      {/* <SignUp /> */}
      {/* <QuestionsList /> */}
    <Route exact path="/" component={QuestionsList} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={SignUp} />

</div>
</div>
  );
}

export default withRouter(App);