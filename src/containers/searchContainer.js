import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../components/search/searchBar'
import SpotifyTrackSearch from '../components/search/spotifyTrackSearch'
import ResultsContainer from './resultsContainer'


export class SearchContainer extends Component {


  render() {
    return (
      <>
        <SearchBar searchInput={this.props.searchInput} results={this.props.results} />
        <ResultsContainer results={this.props.results} />
        <SpotifyTrackSearch searchQuery={this.props.searchQuery} searchResults={this.props.searchResults} />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchQuery: state.searchInput,
    results: state.searchResults
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchInput: search => dispatch({type: "SEARCH", search}),
    searchResults: results => dispatch({type: "SEARCH_RESULTS", results})
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)