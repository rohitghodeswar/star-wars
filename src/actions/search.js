import axios from "axios";

export const SEARCH_PERFORMED = "SEARCH_PERFORMED";
export const SEARCH_STATUS = "SEARCH_STATUS";
export const SEARCH_ERROR = "SEARCH_ERROR";

export const searchPerformed = searchTerm => {
  return {
    type: SEARCH_PERFORMED,
    searchTerm
  };
};

export const searchError = error => ({
  type: SEARCH_ERROR,
  error
});

export const searchStatus = payload => ({
  type: SEARCH_STATUS,
  payload
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
          dispatch(
            searchStatus({
              success: true,
              results: data.results,
              inProgress: false,
              message: ""
            })
          );
        } else {
          dispatch(
            searchStatus({
              success: false,
              results: data.results,
              message: "No data found"
            })
          );
        }
      })
      .catch(function(error) {
        dispatch(
          searchError({ success: false, message: "Something went wrong" })
        );
      });
  };
};
