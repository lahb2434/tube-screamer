import React from 'react'
import Track from './track'

export default function TrackSearchResults({results}) {

  const createTracks = (props) => {
    console.log(props)
      return props&&props.map( (track, id) => {
        return <Track 
        key={id} 
        track={track} /> 
      } 
    )
  }
  
   return(
     <div>
       {createTracks(results)}
     </div>
   )
}

