import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <div className="content one">
              <img src={logo} className="logo" alt="logo" />
              <h1>Gradients</h1>
              <p>Start, end, angle</p>
            </div>
            <div className="content two">
              <img src={logo} className="logo" alt="logo" />
              <h1>Presets</h1>
              <p>Manage presets</p>
            </div>
            <div className="content three">
              <img src={logo} className="logo" alt="logo" />
              <h1>Colors</h1>
              <p>Pick any color</p>
            </div>
        </header>
        <section className="gradient one">
          <div className="icon" />
        </section>
        <section className="gradient two">
          <div className="icon" />
        </section>
        <section className="gradient three">
          <div className="icon" />
        </section>
      </Fragment>
    );
  }
}

export default App;
