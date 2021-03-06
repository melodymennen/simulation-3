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
        <Route  path='/login' component={Login} />
        <Route  path='/profile' component={Profile} />
        <Route  path='/search' component={Search} />
      </div>
    );
  }
}

export default App;
