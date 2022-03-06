import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

export default class Control extends Component {

  //I think I need to move all of this to its own container
  //Control Container
  
  state = {
    value: typeof this.props.node.defaults[this.props.name].value == 'boolean' ? true : this.props.node.defaults[this.props.name].value 
  }

  renderControl = (node,name,controlDefaults) => {
    switch (controlDefaults.type) {
      case 'boolean':
        return this.createButton(node, name);
      case 'string':
        return this.createSelectInput(node, name);
      default: 
        return this.createSlider(node, name, Math.min(controlDefaults.min || 0), Math.max(controlDefaults.max || 0, controlDefaults.value), controlDefaults.type);
      }
  }

  handleSliderChange = (node, name, type, e) => {
    const newValue = type === 'float' ? parseFloat(e.target.value) : parseInt(e.target.value);
    node[name] = newValue
    this.setState({value: newValue})
  }

  createSlider = (node, name, min, max, type) => {
  //  const nodeValue = this.numberManagement(node[name]) 
   return <div>
      <label>{name}</label>
      <span>{parseFloat(this.state.value.toFixed(1))}</span>
      {/* need to work on changing value of state, finished */}
      <input 
        type="range" 
        min={min} 
        max={max} 
        value={this.state.value} 
        step={type === 'float' ? (max - min) / 1000 : 1} 
        onInput={(e) => this.handleSliderChange(node, name, type, e)}
        />
    </div>
  }

  handleButtonClick = (node, name) => {
    const newValue = this.state.value === true ? false : true
    node[name] = newValue
    this.setState({value: newValue})  
  }

  createButton = (node, name) => {
      return <Button 
      variant={this.state.value ? 'danger' : 'success' }
      className="btn-small mx-1" 
      onClick={() => this.handleButtonClick(node, name)}>
        {name === 'bypass' ? this.state.value ? 'OFF' : 'ON' : name}
      </Button>
   
  }

  handleSelectChange(node, name, e) {
    node[name] = e.target.value
    this.setState({value: e.target.value}, () => console.log(this.state.value));
  }
  
  createSelectInput = (node, name) => {
  // lowpass, highpass, bandpass, lowshelf, highshelf, peaking, notch, allpass
   return <div>
     <label>Pick your favorite flavor: </label>
      <select value={this.state.value} onChange={(e) => this.handleSelectChange(node, name, e)}>
        <option value="lowpass">lowpass</option>
        <option value="highpass">highpass</option>
        <option value="bandpass">bandpass</option>
        <option value="lowshelf">lowshelf</option>
        <option value="highshelf">highshelf</option>
        <option value="peaking">peaking</option>
        <option value="notch">notch</option>
        <option value="allpass">allpass</option>
      </select>
  </div>
  }

  render() {
    const{node, name} = this.props;
    const controlDefaults = node.defaults[name];
    return (
      <>
      {this.renderControl(node,name,controlDefaults)}
      </>
    )
  }
}
