
import SpotifyPlayer from 'react-spotify-web-playback'

export default function player({accessToken, trackUri}) {
  
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

