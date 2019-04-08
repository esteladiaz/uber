import React, { Component } from 'react'
import './App.scss'
import SlideContainer from './components/SlideContainer'
import { BrowserRouter as Router } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <SlideContainer />
        </div>
      </Router>
    )
  }
}

export default App