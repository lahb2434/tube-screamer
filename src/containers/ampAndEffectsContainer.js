import React, {Component} from 'react';
import Effects from '../components/effects'
const Tuna = require('tunajs')

export default class AmpAndEffectsContainer extends Component {
  
  state = {
    audioContext: null,
    effect: null,
    pedals: [],
  }
    
    componentDidMount() {
      const audioContext = new AudioContext();
      const effect = new Tuna(audioContext);
      let pedals = this.createPedals(effect)
      this.setState({
        ...this.state, 
        audioContext: audioContext, 
        effect: effect,
        pedals: pedals})
    }

    createPedals = (effect) => {
      const nodeTypes = ['Chorus', 'Compressor', 'Delay', 'Filter', 'Overdrive', 'Panner', 'Phaser', 'Tremolo', 'WahWah'];
      return nodeTypes.map( newEffect => {
        return new effect[newEffect]({ bypass: true })
      })
    }

  render() {
  return <div>
    <Effects pedals={this.state.pedals}/>
  </div>;
  }

}
