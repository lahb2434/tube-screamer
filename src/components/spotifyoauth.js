import React, { Component } from 'react'
import axios from 'axios' 
import Login from'./login.js'
import Dashboard from './dashboard'


const code = new URLSearchParams(window.location.search).get('code')

const clientId = process.env.REACT_APP_CLIENT_ID;
const scope = 'streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state';

const AUTH_URL = "https://accounts.spotify.com/authorize?" +
  new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    redirect_uri: 'http://localhost:3000/',
    state: 'hellowhatisgoingdownouthere',
    scope: scope,
  }).toString();

export default class SpotifyOauth extends Component {

  state = {
    accessToken: '',
    refreshToken: '',
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

  refreshAuth = () => {
    setTimeout(() => {
      axios.post('http://localhost:8008/refresh', {
        refresh_token: this.state.refreshToken
      })
      .then(response => {
        this.setState({ 
          expiresIn: response.data.expiresIn, 
          accessToken: response.data.accessToken})
      })
      .catch(err => {
        console.log(err)
        window.location = '/'
      })
    }, (this.state.expiresIn - 300) * 1000)
  };

  getAuth = () => {
    axios.post('http://localhost:8008/login', {
      code
    })
    .then(response => {
      window.history.pushState({}, null, '/')
      let res = response.data
      this.setState({ 
        expiresIn: res.expiresIn, 
        accessToken: res.accessToken, 
        refreshToken: res.refreshToken}) 
    })
    .catch(err => {
      console.log(err)
      window.location = '/'
    })
  }

  render() {
    return (
    <>
     {!this.state.accessToken ? <Login AUTH_URL={AUTH_URL} /> : <Dashboard {...this.state}/>}
     
    </>
    )
  }
}
