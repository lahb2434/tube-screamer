 
export default function manageSearch(state = {}, action) {
    switch(action.type) {
      case "SEARCH":
        return {searchInput: action.search}

      case "SEARCH_RESULTS":
        return {...state, searchResults: action.results}
       
      default:
        return state
    }   
}