import React, { Component } from 'react'
import Track from './track'
import {Dropdown} from 'react-bootstrap'

export default class TrackSearchResults extends Component {
  
  
  createTracks = (props) => {
    console.log(props.results)
      return props.results&&props.results.map( (track, id) => 
      <Dropdown.Item onClick={()=>this.props.selectTrack(track.trackUri)}><Track key={id} track={track} /></Dropdown.Item>   
    )
  }
  
  render() {
    const show = !!this.props.results ? true : false;
   return(
    <div className="d-flex justify-content-center">
      <Dropdown.Menu show={show} style={{ overflowY: "auto" }}>
        {this.createTracks(this.props)}
      </Dropdown.Menu>
      </div>
   )
  }
}

