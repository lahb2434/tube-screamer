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
      this.setupContext(pedals, audioContext)
      this.setState({
        ...this.state, 
        audioContext: audioContext, 
        effect: effect,
        pedals: pedals})
    }

    setupContext = async (pedals, audioContext) => {
      const guitar = await this.getGuitar()
      
      if (audioContext.state === 'suspended') {
        await audioContext.resume()
      }
      const source = audioContext.createMediaStreamSource(guitar)
      
      let previousNode = source
      pedals.forEach(node => {
        console.log(previousNode)
          previousNode.connect(node)
          previousNode = node
      })
      previousNode.connect(audioContext.destination)
      console.log('success')
        // .connect(bassEQ)
        // .connect(midEQ)
        // .connect(trebleEQ)
        // .connect(gainNode)
        // .connect(analyserNode)
        // .connect(context.destination)
    }

    getGuitar = () => {
      return navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: false,
          autoGainControl: false,
          noiseSuppression: false,
          latency: 0
        }
      })
    }

    createPedals = (effect) => {
      const nodeTypes = ['Chorus', 'Compressor', 'Delay', 'Filter', 'Overdrive', 'Panner', 'Phaser', 'Tremolo', 'WahWah'];
      return nodeTypes.map( newEffect => {
        return new effect[newEffect]({ bypass: true })
      })
    }

  render() {
  return <div className='mb-3'>
    <Effects pedals={this.state.pedals}/>
  </div>;
  }

}
