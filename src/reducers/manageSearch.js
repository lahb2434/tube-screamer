 
export default function manageSearch(state = {}, action) {
    switch(action.type) {
      case "SEARCH_RESULTS":
        return {searchResults: action.results}
       
      default:
        return state
    }   
}