import React, { Component } from 'react'
import { Container, Form, Stack, Button } from 'react-bootstrap';

export default class SearchBar extends Component {
    state = {
      searchInput: ''
    }

  render() {
    return (
      <Container className="my-3">
        <Stack direction="horizontal" gap={3}>
          <Form.Control className="me-auto" placeholder="Search Artists/Songs" onChange={e => this.setState({searchInput: e.target.value})}/>
          <Button variant="secondary">Submit</Button>
        </Stack>
        {this.props.songs}
      </Container>
    )
  }
}
