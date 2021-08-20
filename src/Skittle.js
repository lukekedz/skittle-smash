import React, { Component } from 'react';
import './App.css';

class Skittle extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: null,
      selectedColor: '#f44336',
      unselectedColor: '#4CAF50',
      color: '#4CAF50'
    };
  }

  updateBackgroundColor = () => {
    return this.state.color === this.state.selectedColor ? this.state.unselectedColor : this.state.selectedColor;
  }

  select = () => {
    this.setState({
      color: this.updateBackgroundColor()
    })
  };

  render() {
    return(
      <button
        className="skittle"
        onClick={() => this.select()}
        style={{backgroundColor: this.state.color}}
      >
        {this.state.value}
      </button>
    );
  }
}

export default Skittle;