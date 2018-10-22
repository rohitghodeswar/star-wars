import axios from "axios";

export const SEARCH_PERFORMED = "SEARCH_PERFORMED";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_ERROR = "SEARCH_ERROR";


export const searchPerformed = searchTerm => {
  return {
    type: SEARCH_PERFORMED,
    searchTerm
  };
};

export const searchSuccess = results => ({
  type: SEARCH_SUCCESS,
  results
});

export const searchError = error => ({
  type: SEARCH_ERROR,
  error
});


export const searchPlanets = text => {
  return dispatch => {
    dispatch(searchPerformed({ success: true, message: "Searching..." }));
    axios
      .get("https://swapi.co/api/planets", {
        params: {
          search: text
        }
      })
      .then(function(response) {
        let data = response.data;
        if (data && data.results && data.results.length > 0) {
          dispatch(searchSuccess({ success: true, results: data.results, inProgress: false, message:'' }));
        } else {
          dispatch(searchError({ success: false, results:data.results,message: "No data found" }));
        }
      })
      .catch(function(error) {
        dispatch(searchError({ success: false, message: 'Something went wrong' }));
      });
  };
};
