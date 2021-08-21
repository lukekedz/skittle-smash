import React, { Component } from 'react';
import './App.css';

class Skittle extends Component {
  render() {
    return(
      <button
        className={this.props.className}
        onClick={() => this.props.onClick()}
      >
      </button>
    );
  }
}

export default Skittle;
