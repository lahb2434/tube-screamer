 
export default function manageSearch(state = {}, action) {
    switch(action.type) {
      case "SEARCH_RESULTS":
        return {...state, searchQuery: action.results}

      case "SELECT_TRACK":
        delete state.searchQuery
        return {...state, selectTrack: action.trackUri}

      case "ACCESS_TOKEN":
        return {...state, accessToken: action.accessToken}
       
      default:
        return state
    }   
}