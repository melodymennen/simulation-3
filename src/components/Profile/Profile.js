import React, { Component } from 'react';
import Header from '../Header/Header';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="main">
            <Header page="Profile"/>
            <div className="profile-card content" >
              <div className="">pic and name</div>
              <div className="buttons">
                <button className="dark button" >Update</button>
                <button className="light button" >Cancel</button>
              </div>
            </div>
            <div className="input-card content" >
              <div className="left">
                  First Name
                  Last Name 
                  Gender 
                  Hair Color 
                  Eye Color
              </div>
              <div className="right">
                  Hobby
                  Birthday Day 
                  Birthday Month 
                  Birthday Year
              </div>
          </div>
      </div>
    );
  }
}

export default Profile;
