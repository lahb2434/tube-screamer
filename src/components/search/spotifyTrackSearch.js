import axios from 'axios' 

export default function SpotifyTrackSearch({searchQuery, searchResults}) {
  if(searchQuery){
    axios.post('http://localhost:8008/search', {
      searchQuery
    })
    .then(response => {
      searchResults(
      response.data.map(track => {
        return {
          artist: track.artists[0].name,
          artistUri: track.artists[0].uri,
          album: track.album.name,
          albumUri: track.album.uri,
          name: track.name,
          imgUrl: track.album.images[2].url,
          trackUri: track.uri
        }
      }))
    })
    .catch(err => {
      console.log(err)
    })
  }
  

  return null;
}
