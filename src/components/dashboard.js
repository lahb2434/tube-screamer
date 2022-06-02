import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import AmpAndEffectsContainer from '../containers/effectsContainer'
import SearchContainer from '../containers/searchContainer'
import PlayerContainer from '../containers/playerContainer'
import LoginContainer from '../containers/loginContainer'


export default class Dashboard extends Component {

  render() {
    return (
      <>
        <Container className="d-flex flex-column py-2 my-3">
          <SearchContainer />
        </Container>
        <AmpAndEffectsContainer />
        <LoginContainer />
        {/* <PlayerContainer /> */}
      </>
    )
  }
}

