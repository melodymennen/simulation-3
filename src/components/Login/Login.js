import React, { Component } from 'react';
import logo from '../../images/logo.png';
import { login } from '../../ducks/reducer';
import { connect } from 'react-redux';
import Auth0Lock from 'auth0-lock';
import axios from 'axios';
import './Login.css';

class Login extends Component {
  constructor(){
    super()

    this.lock = null; 
    this.login = this.login.bind(this)
  }

  componentDidMount() {
    this.lock = new Auth0Lock(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN)
    this.lock.on('authenticated', authResult => {
        this.lock.getUserInfo(authResult.accessToken, (error, user) => {
            axios.post('/login', {userId: user.sub}).then(response => {
                this.props.login(response.data.user)
                this.props.history.push('/')
            })
        })
    })
}

  login(){
    this.lock.show()
  }

  render() {
    return (
      <div className="main-page">
        <div className="splash">
          <img src={logo} />
          Helo
          <button className="dark login-button" onClick={this.login}>Login/Register</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  login: login
}

export default connect(null, mapDispatchToProps)(Login);
