import LoginContainer from './containers/loginContainer'
import './App.css';

function App({persistor}) {
  persistor.purge()
  return <LoginContainer  />
}

export default App;