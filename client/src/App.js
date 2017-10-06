import React, {Component} from 'react'
import Menu from './components/Menu/Menu'
import LandingPage from './components/LandingPage/LandingPage'
// import Feature from './components/Feature/Feature'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <header className="App">
          <Menu/>
          <LandingPage />
        </header>
        {/* <Feature/> */}
      </div>
    );
  }
}

export default App;
