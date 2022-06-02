import React, { Component } from 'react';
import { connect } from 'react-redux'
import Player from '../components/player'

class PlayerContainer extends Component {
  
  render() {
    return <div>
      <Player accessToken={this.props.accessToken} trackUri={this.props.trackUri}/>
    </div>;
  }
}

const mapStateToProps = (state) => { 
  return {
    accessToken: state.accessToken,
    trackUri: state.selectTrack,  
  }
}

export default connect(mapStateToProps)(PlayerContainer)
