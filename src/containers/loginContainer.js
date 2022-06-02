import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import Login from '../components/authorization/login';
import PlayerContainer from '../containers/playerContainer';

const code = new URLSearchParams(window.location.search).get('code')

const clientId = process.env.REACT_APP_CLIENT_ID;
const scope = 'streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state';

const AUTH_URL = "https://accounts.spotify.com/authorize?" +
  new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    redirect_uri: 'http://localhost:3000/',
    state: 'hellowhatisgoingonouthere',
    scope: scope,
  }).toString(); 

class LoginContainer extends Component { 

  state = {
    accessToken: '',
    expiresIn: '',
  }

  componentDidMount() {
    if(code){
      this.getAuth()
    }
  }

  componentDidUpdate(prevState){
    if(prevState.expiresIn !== this.state.expiresIn){
      this.refreshAuth()
    }
  }

  getAuth = () => {
    axios.post('http://localhost:8008/login', {  
      code
    })
    .then(response => {
      debugger; 
      let res = response.data
      this.setState({ 
        expiresIn: res.expiresIn, 
        accessToken: res.accessToken, 
      }) 
    })
    .catch(err => {
      console.log(err)
      window.location = '/'
    })
  }
  
  refreshAuth = () => {
    setInterval(() => {
      axios.post('http://localhost:8008/refresh')
      .then(response => { 
          this.props.accessToken(response.data.accessToken)
      })
      .catch(err => {
        console.log(err)
        window.location = '/'
      })
    }, (this.state.expiresIn - 300) * 1000)
  };

  render() {
    const {accessToken} = this.state;
    
    if(accessToken){
      this.props.accessToken(accessToken)
      return <PlayerContainer />
      //  return <Navigate to='/dashboard' />
    }
    return <Login AUTH_URL={AUTH_URL} />
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    accessToken: accessToken => dispatch({type: "ACCESS_TOKEN", accessToken}),
  } 
}

export default connect(null, mapDispatchToProps)(LoginContainer)
