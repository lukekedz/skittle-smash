import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Smash from './Smash.js';

class App extends Component {
  componentDidMount() {
    document.title = 'Taste the Rainbow!';
  }

  render() {
    return (
      <div className="base">
        <Header />
        <Smash />
      </div>
    );
  }
}

export default App;
