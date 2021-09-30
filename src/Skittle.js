import React, { Component } from 'react';

class Skittle extends Component {
  render() {
    return(
      <li>
        <button
          className={this.props.className}
          style={{
            background: `${this.props.color}`, 
            border: `1px solid ${this.props.color}`
          }}
          onClick={() => this.props.onClick()}
        >
        </button>
      </li>
    );
  }
}

export default Skittle;
