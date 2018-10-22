import {
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  SEARCH_PERFORMED
} from "./../actions/search";

const initialState = {
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PERFORMED:
      return {
        ...state,
        inProgress: action.searchTerm
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        results: action.results
      };
      case SEARCH_ERROR:
      return {
        ...state,
        error: action.error,
        results: action.results
      };
    default:
      return state;
  }
};
