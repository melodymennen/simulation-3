import React, { Component } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="main-page">
        <div className="splash">
          <img src={logo} />
          Helo
          <Link className="dark login-button" to="/">Login/Register</Link>
        </div>
      </div>
    );
  }
}

export default Login;
