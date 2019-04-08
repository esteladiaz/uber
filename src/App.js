import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <div className="content one">
            <div className="logo one" alt="Gradients">1</div>
            <h1>Gradients</h1>
            <p>Start, end, angle</p>
          </div>
          <div className="content two">
            <div className="logo two" alt="Presets">2</div>
            <h1>Presets</h1>
            <p>Manage presets</p>
          </div>
          <div className="content three">
            <div className="logo three" alt="Colors">3</div>
            <h1>Colors</h1>
            <p>Pick any color</p>
          </div>
        </header>
        <section>
          <div className="gradient one">
            <div className="icon" />
          </div>
          <div className="gradient two">
            <div className="icon" />
          </div>
          <div className="gradient three">
            <div className="icon" />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
