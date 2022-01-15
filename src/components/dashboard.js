import React, { Component } from 'react'

export default class Dashboard extends Component {

  render() {
    const { accessToken } = this.props;
    return (
      <div>
      {accessToken}
      </div>
    )
  }
}

