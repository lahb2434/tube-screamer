import React from 'react'
import {Container} from 'react-bootstrap'


export default function Login({AUTH_URL}) {
  return (
    <div className="p-3 mb-2 bg-dark bg-gradient">
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <a className="btn btn-dark btn-large" href={AUTH_URL} role="button">
          Login With Spotify 
        </a>
      </Container>
    </div>
  )
}
