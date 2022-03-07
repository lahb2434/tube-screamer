import React, { Component } from 'react';
import ControlContainer from '../../containers/controlContainer'

export default class Pedal extends Component {

  createPedalControls = (node) => {
    return Object.keys(node.defaults).map((name, key) => { 
         return <ControlContainer key={key} node={node} name={name} />
    }) 
  }

  render() {
    return <div className='pedal' >
      <label>{this.props.pedal.name}</label>
      {this.createPedalControls(this.props.pedal)}
      </div>;
  }
}
