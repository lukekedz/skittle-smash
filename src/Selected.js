import React, { Component } from 'react';

class Selected extends Component {
  render() {
    return(
      <div>
        <div>{this.props.selected[0]}</div>
        <div>{this.props.selected[1]}</div>
        <div>{this.props.selected[2]}</div>
      </div>
    );
  }
}

export default Selected;
