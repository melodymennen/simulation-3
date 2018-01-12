import React, { Component } from 'react';
import Header from '../Header/Header';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="main">
            <Header page="Search"/>
            <div className="content" >
              <div className="search">
                <select className="dropdown">
                  <option>First Name</option>
                  <option>Last Name</option>
                </select>
                <input className="input"/>
                <button className="dark button">Search</button>
                <button className="light button">Reset</button>
              </div>
              <div className="list">
              
              </div>

            </div>
      </div>
    );
  }
}

export default Search;
