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
      
    //   axios.post('http://localhost:3001/login', {
    //   code
    // })
    // .then(response => {
    //   window.history.pushState({}, null, '/')
    //   let res = response.data
    //   this.setState({ 
    //     expiresIn: res.expiresIn, 
    //     accessToken: res.accessToken, 
    //     refreshToken: res.refreshToken}, () => console.log(this.state)) 
    // })
    // .catch(() => {
    //   window.location = '/'
    // })
    debugger;
    } 
    
  }

  getAuth = () => {
    axios.post('http://localhost:3001/login', {
      code
    })
    .then(response => {
      window.history.pushState({}, null, '/')
      let res = response.data
      this.setState({ 
        expiresIn: res.expiresIn, 
        accessToken: res.accessToken, 
        refreshToken: res.refreshToken}, () => console.log(this.state)) 
    })
    .catch(() => {
      window.location = '/'
    })
  }

  render() {
    return (
    <>
     {!code ? <Login AUTH_URL={AUTH_URL} /> : <Dashboard code={code}/>}
    </>
    )
  }
}
