import axios from "axios";

export const LOGIN_PERFORMED = "LOGIN_PERFORMED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const loginPerformed = data => {
  return {
    type: LOGIN_PERFORMED,
    data
  };
};

const loginSuccess = data => {
  return {
    type: LOGIN_SUCCESS,
    data
  };
};

const loginError = data => {
  return {
    type: LOGIN_ERROR,
    data
  };
};

export const loginRequest = ({ username, password }) => {
  return dispatch => {
    //  username and password is undefined
    /*  this handles on direct login button click without 
        entering username and password
    */
    if (password === undefined && username === undefined) {
      dispatch(loginError({ success: false, isLogin: true }));
      return;
    }

    dispatch(loginPerformed());
    axios
      .get("https://swapi.co/api/people", {
        params: {
          search: username
        }
      })
      .then(response => {
        const loginData = response.data;

        if (loginData && loginData.results && loginData.results.length > 0) {
          const { name, birth_year } = loginData.results[0];

          if (name === username && birth_year === password) {
            dispatch(loginSuccess({ success: true, isLogin: false, name }));
            return;
          } else {
            dispatch(loginError({ success: false, isLogin: true }));
          }
        } else {
          dispatch(loginError({ success: false, isLogin: true }));
        }
      })
      .catch(function(error) {
        dispatch(loginError({ success: false, isLogin: true }));
      });
  };
};

