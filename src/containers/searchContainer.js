import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../components/search/searchBar'
import TrackSearchResults from '../components/search/trackSearchResults'



export class SearchContainer extends Component {

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
        <SearchBar searchResults={this.props.searchResults}/>
        <TrackSearchResults results={this.props.results} />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.searchResults
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchResults: results => dispatch({type: "SEARCH_RESULTS", results})
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)