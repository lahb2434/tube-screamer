 
export default function manageSearch(state = {}, action) {
    switch(action.type) {
      case "SEARCH_RESULTS":
        return {searchQuery: action.results}

      case "SELECT_TRACK":
        return {selectTrack: action.trackUri}

      case "ACCESS_TOKEN":
        return {accessToken: action.accessToken}
       
      default:
        return state
    }   
}