import React from 'react'
import {Container} from 'react-bootstrap'


export default function Login({AUTH_URL}) {
  return (
    // <div className="p-3 bg-dark bg-gradient">
      /* <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}> */
        <a className="fixed-bottom btn btn-dark btn-large" href={AUTH_URL} role="button">
          Spotify
        </a>
      // </Container>
    // </div>
  )
}
