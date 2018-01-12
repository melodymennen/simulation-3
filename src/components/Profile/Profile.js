import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateFirstName, updateLastName, updateGender, updateHairColor, updateEyeColor, updateHobby, updateBdayDay, updateBdayMonth, updateBdayYear } from '../../ducks/reducer';
import './Profile.css';

class Profile extends Component {
  render() {

    const { updateFirstName, updateLastName, updateGender, updateHairColor, updateEyeColor, updateHobby, updateBdayDay, updateBdayMonth, updateBdayYear } = this.props;

    return (
      <div className="main">
            <Header page="Profile"/>
            <div className="profile-card content" >
              <div className="">pic and name</div>
              <div className="buttons">
                <Link className="dark button" to="/">Update</Link>
                <Link className="light button" to="/">Cancel</Link>
              </div>
            </div>
            <div className="input-card content" >
              <div className="left">
                  First Name
                  <input className="input" onChange={e => updateFirstName(e.target.value)}/>
                  Last Name 
                  <input className="input" onChange={e => updateLastName(e.target.value)}/>
                  Gender 
                  <select className="dropdown" onChange={e => updateGender(e.target.value)}>
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  Hair Color 
                  <select className="dropdown" onChange={e => updateHairColor(e.target.value)}>
                    <option>Select</option>
                    <option>Brown</option>
                    <option>Blonde</option>
                    <option>Black</option>
                    <option>Red</option>
                    <option>Gray</option>
                    <option>Bald</option>
                    <option>Other</option>
                  </select>
                  Eye Color
                  <select className="dropdown" onChange={e => updateEyeColor(e.target.value)}>
                    <option>Select</option>
                    <option>Brown</option>
                    <option>Blue</option>
                    <option>Green</option>
                    <option>Other</option>
                  </select>
              </div>
              <div className="right">
                  Hobby
                  <select className="dropdown" onChange={e => updateHobby(e.target.value)}>
                    <option>Select</option>
                    <option></option>
                  </select>
                  Birthday Day 
                  <select className="dropdown" onChange={e => updateBdayDay(e.target.value)}>
                    <option>Select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  Birthday Month 
                  <select className="dropdown" onChange={e => updateBdayMonth(e.target.value)}>
                    <option>Select</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                  Birthday Year
                  <select className="dropdown" onChange={e => updateBdayYear(e.target.value)}>
                    <option>Select</option>
                    <option>2018</option>
                    <option>2017</option>
                  </select>
              </div>
          </div>
      </div>
    );
  }
}

// Simulation-3 43J
const mapDispatchToProps = {
  updateFirstName,
  updateLastName, 
  updateGender,
  updateHairColor,
  updateEyeColor, 
  updateHobby, 
  updateBdayDay, 
  updateBdayMonth, 
  updateBdayYear
}

export default connect(null, mapDispatchToProps)(Profile);
