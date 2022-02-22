import React, { Component } from 'react';
import { connect } from 'react-redux'
import Player from '../components/player'

class PlayerContainer extends Component {
  debugger;
  render() {
    return <div>
      <Player accessToken={this.props.accessToken} trackUri={this.props.trackUri}/>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    trackUri: state.selectTrack, 
    // accessToken: state.accessToken
  }
}

export default connect(mapStateToProps)(PlayerContainer)
