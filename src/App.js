import React, { Component } from 'react'
import './App.scss'
import SlideContainer from './components/SlideContainer'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <SlideContainer />
      </div>
    );
  }
}

export default App;
