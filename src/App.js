import LoginContainer from './containers/loginContainer'
import Dashboard from './components/dashboard'
import './App.css';

function App({persistor}) {
  persistor.purge()
  return <Dashboard />
  // return <LoginContainer  />
}

export default App;