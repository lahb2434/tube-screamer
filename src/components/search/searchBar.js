import React, { Component } from 'react'
import { Form, Stack, Button } from 'react-bootstrap';
import axios from 'axios' 


export default class SearchBar extends Component {
    state = {
      searchInput: '',
    }

    handleOnSubmit(event) {
      event.preventDefault();
      if(!this.state.searchInput){ 
        console.log('Look up some stuff')
      } else 
      axios.post('http://localhost:8008/search', {
        searchQuery: this.state.searchInput
    })
    .then(response => {
      this.props.searchQuery(
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
      // this.setState({
      //   searchInput: '',
      // });
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
      
       <Form onSubmit={(event) => this.handleOnSubmit(event)}>
        <Stack direction="horizontal" gap={3}>
          <Form.Control className="me-auto" placeholder="Search Songs" value={this.state.searchInput} onChange={(e) => this.setState({searchInput: e.target.value})}/>
          <Button variant="secondary" type="submit">Submit</Button>
        </Stack>
       </Form>
      
    )
  }
}
