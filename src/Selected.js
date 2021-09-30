import React, { Component } from 'react';
import './selected.css';

class Selected extends Component {
  render() {
    return(
      <ul className="selected-flavors">
        <li className="square">{this.props.selected[0]}</li>
        <li className="square">{this.props.selected[1]}</li>
        <li className="square">{this.props.selected[2]}</li>
      </ul>
    );
  }
}

export default Selected;
