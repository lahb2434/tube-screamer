 
export default function manageSearch(state = '', action) {
    switch(action.type) {
      case "SEARCH":
        return {state..., search: action.searchInput}
      
      default:
        return state
    }
}