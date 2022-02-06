import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

export default class Control extends Component {
  
  state = {
    value: this.props.node.defaults[this.props.name].value
  }

  renderControl = (node,name,controlDefaults) => {
    switch (controlDefaults.type) {
      case 'boolean':
        return this.createCheckbox(node, name);
      case 'string':
        // createCheckbox(node, val, node[name]);
        break;
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
   return <div>
      <label>{name}</label>
      {/* need to work on changing state of value */}
      <input 
        type="range" 
        min={min} 
        max={max} 
        value={this.state.value} 
        step={type === 'float' ? (max - min) / 1000 : 1} 
        onInput={(e) => this.handleSliderChange(node, name, type, e)}
        />
      <span>{this.state.value}</span>
    </div>
  }

  handleButtonClick = (node, name) => {
    const newValue = this.state.value === false ? true : false
    node[name] = newValue
    this.setState({value: newValue})  
  }

  createCheckbox = (node, name) => {

      return <Button 
      variant={this.state.value ? 'success' : 'danger'}
      className="btn-small" 
      onClick={() => this.handleButtonClick(node, name)}>
        {name === 'bypass' ? this.state.value ? 'ON' : 'OFF' : name}
      </Button>
   
}
    
    //  let boxLabel = document.createElement("label");
    //  boxLabel.textContent = name;
    //  let box = document.createElement("input");
    //  box.type = "checkbox";
    //  box.checked = node[name];
    //  box.onchange = _ => node[name] = box.checked;

    //  return [boxLabel, box];
  


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
