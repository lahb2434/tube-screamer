import React, {Component} from 'react';
import Pedal from './pedal'

export default class Effects extends Component {

    showPedals = (pedals) => {
      return pedals.map((pedal, key) => <Pedal key={key} pedal={pedal}/> );   
    }
  
  render() {
    if(!this.props.pedals.length){
      return null
    } else {
      return <div className="effects pb-5">
        {this.showPedals(this.props.pedals)}
      </div>
    }
  }
}
