import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import AmpAndEffectsContainer from '../containers/ampAndEffectsContainer'
import SearchContainer from '../containers/searchContainer'
import PlayerContainer from '../containers/playerContainer'


export default class Dashboard extends Component {

  render() {
    return (
      <>
        <Container className="d-flex flex-column py-2 my-3">
          <SearchContainer />
        </Container>
        <AmpAndEffectsContainer />
        <PlayerContainer accessToken={this.props.accessToken}/>
      </>
    )
  }
}

