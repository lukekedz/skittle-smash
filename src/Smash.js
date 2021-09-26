import React, { Component } from 'react';
import Selected from './Selected.js';
import Skittle from './Skittle.js';

class Smash extends Component {
  constructor (props) {
    super(props);
    this.state = {
      message: this.dynamicMessage(0),
      selected: [],
      skittles: Array(5).fill('unselected'),
    };
  }

  dynamicMessage(i) {
    switch(i) {
      case 0:
        return 'Select up to 3 flavors.'
      case 1: 
        return 'Two more!'
      case 2: 
        return 'One more flavor to select!!'
      case 3:
        return 'Ready to Skittle Smash?!'
    }
  }

  selectSkittle(i) {
    const selected = this.state.selected.slice();
    const clickedSkittleIndex = selected.indexOf(i);
    
    const threeSelected = this.threeSelections(selected, clickedSkittleIndex)
    if (threeSelected) { return }

    if (clickedSkittleIndex > -1) {
      selected.splice(clickedSkittleIndex, 1);
    } else {
      selected.push(i)
    }

    const skittles = this.state.skittles.slice();
    skittles[i] = this.updateClass(i);

    const message = this.dynamicMessage(selected.length)

    this.setState({
      message: message,
      selected: selected,
      skittles: skittles,
    });
  }

  renderSkittle(i) {
    return (
      <Skittle
        className={this.state.skittles[i]}
        onClick={() => this.selectSkittle(i)}
      />
    );
  }

  threeSelections(selected, clickedSkittleIndex) {
    return selected.length === 3 &&
           clickedSkittleIndex === -1;
  }

  updateClass(i) {
    let updatedClass = this.state.skittles[i] === 'selected' ? 'unselected' : 'selected';

    return updatedClass;
  }

  render() {
    return(
      <div className="smash">
        <div className="board-row" id="message">
          <div>{this.state.message}</div>
        </div>
        <div className="board-row">
          <Selected selected={this.state.selected}/>
        </div>
        <div className="board-row">
          <div className="flavor-theme-title">
            <p>original</p>
          </div>
          <div className="flavors">
            {this.renderSkittle(0)}
            {this.renderSkittle(1)}
            {this.renderSkittle(2)}
            {this.renderSkittle(3)}
            {this.renderSkittle(4)}
          </div>
        </div>
      </div>
    );
  }
}

export default Smash;
