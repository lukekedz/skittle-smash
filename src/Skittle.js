import React, { Component } from 'react';
import './App.css';

class Skittle extends Component {
  render() {
    return(
      <button
        className={this.props.className}
        style={{
          background: `${this.props.color}`, 
          border: `1px solid ${this.props.color}`
        }}
        onClick={() => this.props.onClick()}
      >
      </button>
    );
  }
}

export default Skittle;
