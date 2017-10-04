import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import LandingPage from './components/LandingPage/LandingPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Menu />
        <LandingPage />
      </div>
    );
  }
}

export default App;
