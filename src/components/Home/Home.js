import React, { Component } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Home.css';

class Home extends Component {
  render() {

    const { firstName, lastName } = this.props;

    return (
      <div className="main">
            <Header page="Dashboard"/>
            <div className="profile">
                <div className="content profile-card"> 
                  <div className="photo"></div>
                  <div className="name">
                    <strong>{firstName}</strong>
                    <strong>{lastName}</strong>
                    <Link className="light button" to="/profile">Edit Profile</Link>
                  </div>
                </div>
                <div className="content info-card">Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</div>
            </div>
            <div className="recommended content">
                Recommended Friends
            </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    firstName: state.firstName,
    lastName: state.lastName
  }
}


export default connect(mapStateToProps)(Home);
