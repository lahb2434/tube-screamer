import React, { Component } from 'react'
import { Container, Form, Stack, Button } from 'react-bootstrap';
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_CLIENT_ID,
})

export default class Dashboard extends Component {

  render() {
    const { accessToken } = this.props;
    return (
      <Container className="my-3">
        <Stack direction="horizontal" gap={3}>
          <Form.Control className="me-auto" placeholder="Search Artists/Songs" />
          <Button variant="secondary">Submit</Button>
        </Stack>
      </Container>
    )
  }
}

