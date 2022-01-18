import React, { Component } from 'react'
import { Container, Form, Stack, Button } from 'react-bootstrap';

export default class SearchBar extends Component {
    state = {
      searchInput: ''
    }

    handleOnSubmit(event) {
      event.preventDefault();
      this.props.searchInput(this.state.searchInput);
      this.setState({
        searchInput: '',
      });
    }

    // componentDidUpdate(prevState){
    //   if(prevState.searchInput !== this.state.searchInput){
    //     this.props.searchInput(this.state.searchInput);
    //   }
    // }

  render() {
    return (
      <Container className="my-3">
        <Stack direction="horizontal" gap={3}>
          <Form.Control className="me-auto" placeholder="Search Artists/Songs" onChange={(e) => this.setState({searchInput: e.target.value})}/>
          <Button variant="secondary" onClick={(event) => this.handleOnSubmit(event)}>Submit</Button>
        </Stack>
      </Container>
    )
  }
}
