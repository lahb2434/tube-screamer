import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from '../components/searchBar'

export class SearchBarContainer extends Component {
  render() {
    return (
      <>
        <Search />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {searchInput: state.searchInput}
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchInput: searchInput => dispatch({type: "SEARCH", searchInput})
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer)