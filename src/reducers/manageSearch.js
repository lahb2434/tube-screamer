 
export default function manageSearch(state = {}, action) {
    switch(action.type) {
      case "SEARCH_RESULTS":
        return {searchQuery: action.results}

      case "SELECT_TRACK":
        return {selectTrack: action.trackUri}

      
       
      default:
        return state
    }   
}