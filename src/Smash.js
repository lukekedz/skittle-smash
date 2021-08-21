import React, { Component } from 'react';
import Skittle from './Skittle.js';

class Smash extends Component {
  constructor (props) {
    super(props);
    this.state = {
      skittles: Array(5).fill('unselected')
    };
  }

  updateClass(i) {
    let updatedClass = this.state.skittles[i] === 'selected' ? 'unselected' : 'selected';

    return updatedClass;
  }

  selectSkittle(i) {
    const skittles = this.state.skittles.slice();
    skittles[i] = this.updateClass(i);
    this.setState({skittles: skittles});
  }

  renderSkittle(i) {
    return (
      <Skittle
        className={this.state.skittles[i]}
        onClick={() => this.selectSkittle(i)}
      />
    );
  }

  render() {
    return(
      <div className="board-row">
        {this.renderSkittle(0)}
        {this.renderSkittle(1)}
        {this.renderSkittle(2)}
        {this.renderSkittle(3)}
        {this.renderSkittle(4)}
      </div>
    );
  }
}

export default Smash;
