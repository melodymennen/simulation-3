import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Profile from './components/Profile/Profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route exact path='/profile' component={Profile} />
      </div>
    );
  }
}

export default App;
