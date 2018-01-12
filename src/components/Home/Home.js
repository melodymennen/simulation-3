import React, { Component } from 'react';
import Header from '../Header/Header';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="main">
            <Header page="Dashboard"/>
            <div className="profile">
                <div className="content profile-card"> Profile pic and name</div>
                <div className="content info-card">Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</div>
            </div>
            <div className="recommended content">
                Recommended Friends
            </div>
      </div>
    );
  }
}

export default Home;
