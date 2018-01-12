import React, { Component } from 'react';
import Header from '../Header/Header';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="main">
            <Header page="Profile"/>
            Profile
      </div>
    );
  }
}

export default Profile;
