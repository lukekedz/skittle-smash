import React, { Component } from 'react';

import Selected from './Selected.js';
import Skittle from './Skittle.js';

import original from './data/original.js';

class Smash extends Component {
  constructor (props) {
    super(props);
    this.state = {
      info: this.dynamicInfo(0),
      selected: [],
      skittles: original,
    };
  }

  dynamicInfo(i) {
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
    const flavor = this.state.skittles[i].flavor
    const clickedSkittleIndex = selected.indexOf(flavor);
    
    const threeSelected = this.threeSelections(selected, clickedSkittleIndex)
    if (threeSelected) { return }

    if (clickedSkittleIndex > -1) {
      selected.splice(clickedSkittleIndex, 1);
    } else {
      selected.push(flavor)
    }

    const skittles = this.state.skittles.slice();
    skittles[i].class = this.updateClass(i);

    const info = this.dynamicInfo(selected.length)

    this.setState({
      info: info,
      selected: selected,
      skittles: skittles,
    });
  }

  renderSkittle(i) {
    const className = this.state.skittles[i].class
    const color = this.state.skittles[i].color
    return (
      <Skittle
        className={className}
        color={color}
        onClick={() => this.selectSkittle(i)}
      />
    );
  }

  threeSelections(selected, clickedSkittleIndex) {
    return selected.length === 3 &&
           clickedSkittleIndex === -1;
  }

  updateClass(i) {
    let updatedClass = this.state.skittles[i].class === 'selected' ? 'unselected' : 'selected';

    return updatedClass;
  }

  render() {
    return(
      <div>
        <div className="info">
          {this.state.info}
        </div>
        <Selected selected={this.state.selected}/>
        <div>
          <ul className="flavors">
            <li className="bag-name">original</li>
            {this.renderSkittle(0)}
            {this.renderSkittle(1)}
            {this.renderSkittle(2)}
            {this.renderSkittle(3)}
            {this.renderSkittle(4)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Smash;
