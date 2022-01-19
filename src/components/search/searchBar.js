import React, { Component } from 'react'
import axios from 'axios' 
import { Container, Form, Stack, Button } from 'react-bootstrap';

export default class SearchBar extends Component {
    state = {
      searchInput: '',
    }

    handleOnSubmit(event) {
      event.preventDefault();
      axios.post('http://localhost:8008/search', {
        searchQuery: this.state.searchInput
    })
    .then(response => {
      this.props.searchResults(
        response.data.map(track => {
          return {
          artist: track.artists[0].name,
          artistUri: track.artists[0].uri,
          album: track.album.name,
          albumUri: track.album.uri,
          name: track.name,
          imgUrl: track.album.images[2].url,
          trackUri: track.uri
          }
        })
      )
    })
    .catch(err => {
      console.log(err)
    })
      this.setState({
        searchInput: '',
      });
    }

    // componentDidUpdate(prevState){
    //   if(prevState.searchInput !== this.state.searchInput){
    //      axios.post('http://localhost:8008/search', {
    //     searchQuery: this.state.searchInput
    //   })
    //   .then(response => {
    //     this.props.searchResults(
    //       response.data.map(track => {
    //         return {
    //         artist: track.artists[0].name,
    //         artistUri: track.artists[0].uri,
    //         album: track.album.name,
    //         albumUri: track.album.uri,
    //         name: track.name,
    //         imgUrl: track.album.images[2].url,
    //         trackUri: track.uri
    //         }
    //       })
    //     )
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   }) 
    //   }
    // }

  render() {
    return (
      <Container className="my-3">
       <Form onSubmit={(event) => this.handleOnSubmit(event)}>
        <Stack direction="horizontal" gap={3}>
          <Form.Control className="me-auto" placeholder="Search Artists/Songs" onChange={(e) => this.setState({searchInput: e.target.value})}/>
          <Button variant="secondary" type="submit">Submit</Button>
        </Stack>
       </Form>
      </Container>
    )
  }
}
