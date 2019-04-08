import React, { Component } from 'react'
import './App.scss'
import Slide1 from './components/Slide1'
import Slide2 from './components/Slide2'
import Slide3 from './components/Slide3'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Slide1 />
        <Slide2 />
        <Slide3 />
      </div>
    );
  }
}

export default App;
