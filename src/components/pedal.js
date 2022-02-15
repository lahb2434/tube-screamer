import React, { Component } from 'react';
import Control from './control'

export default class Pedal extends Component {

    createPedalControls = (node) => {
      return Object.keys(node.defaults).map((name, key) => { 
           return <Control key={key} node={node} name={name} />
      }) 
    }

  render() {
    return <div className='pedal m-2 p-1 square border border-2 border-dark rounded' >
      <label>{this.props.pedal.name}</label>
      {this.createPedalControls(this.props.pedal)}
      </div>;
  }
}
