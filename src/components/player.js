// import React, {useState, useEffect} from 'react';
import SpotifyPlayer from 'react-spotify-web-playback'

export default function player({accessToken, trackUri}) {
  // const [play, setPlay] = useState(false)
  
  return <div className="fixed-bottom">
    <SpotifyPlayer
      autoPlay={true}
      token={accessToken}
      uris={trackUri ? [trackUri] : []}
      styles={{
        activeColor: '#fff',
        bgColor: '#333',
        color: '#fff',
        loaderColor: '#fff',
        sliderColor: '#1cb954',
        trackArtistColor: '#ccc',
        trackNameColor: '#fff',
      }}
    />

  </div>;
}

