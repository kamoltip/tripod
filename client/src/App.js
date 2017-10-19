import React, {Component} from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import './App.scss'

class App extends Component {

  render() {
    return (
      <div>
        <header className="App">
          <LandingPage />
        </header>
      </div>
    );
  }
}

export default App;
