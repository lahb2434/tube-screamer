import React, {Component} from 'react';
import Pedal from '../components/effects/pedal'
const Tuna = require('tunajs')

export default class AmpAndEffectsContainer extends Component {

  state = {
    pedals: [],
  }
    
    componentDidMount() {
      const audioContext = new AudioContext();
      const effect = new Tuna(audioContext);
      let pedals = this.createPedals(effect)
      this.setupContext(pedals, audioContext)
      this.setState({
        ...this.state, 
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
          previousNode.connect(node)
          previousNode = node
      })
      previousNode.connect(audioContext.destination)
      console.log('success')
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
      const nodeTypes = ['Gain', 'Chorus', 'Compressor', 'Delay', 'Filter', 'Overdrive', 'Panner', 'Phaser', 'Tremolo', 'WahWah'];
      return nodeTypes.map( newEffect => {
        return new effect[newEffect]({ bypass: true })
      })
    }

    showPedals = (pedals) => {
      return pedals.map((pedal, key) => <Pedal key={key} pedal={pedal}/> );   
    }

  render() {

    if(!this.state.pedals.length){
        return null
      } else {
        return <>
        <div className="effects d-flex flex-wrap justify-content-center mb-20">
          {this.showPedals(this.state.pedals)}
        </div>
        <div style={{ height: "10vh" }}></div>
        </>
      }
  }

}

