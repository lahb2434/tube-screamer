import SpotifyOauth from './containers/loginContainer'
import './App.css';


function App({persistor}) {
  persistor.purge()
  return <SpotifyOauth  />
}

export default App;
