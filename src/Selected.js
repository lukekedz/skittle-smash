import React, { Component } from 'react';
import './App.css';
import './Selected.css';

class Selected extends Component {
  render() {
    return(
      <div id="selected-row">
        <div className="selection">{this.props.selected[0]}</div>
        <div className="selection">{this.props.selected[1]}</div>
        <div className="selection">{this.props.selected[2]}</div>
      </div>
    );
  }
}

export default Selected;
