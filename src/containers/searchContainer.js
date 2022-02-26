import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../components/search/searchBar'
import TrackSearchResults from '../components/search/trackSearchResults'



class SearchContainer extends Component {

  componentDidUpdate(prevProps, prevState) {
    Object.entries(this.props).forEach(([key, val]) =>
      prevProps[key] !== val && console.log(`Prop '${key}' changed`)
    );
    if (this.state) {
      Object.entries(this.state).forEach(([key, val]) =>
        prevState[key] !== val && console.log(`State '${key}' changed`)
      );
    }
  }

  render() { 
    return (
      <>
        <SearchBar searchQuery={this.props.searchQuery}/>
        <TrackSearchResults results={this.props.results} selectTrack={this.props.selectTrack} />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.searchQuery,
    trackUri: state.selectTrack
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchQuery: results => dispatch({type: "SEARCH_RESULTS", results}),
    selectTrack: trackUri => dispatch({type: "SELECT_TRACK", trackUri}),
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)