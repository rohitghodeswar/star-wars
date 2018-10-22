import { LOGIN_SUCCESS, LOGIN_ERROR } from './../actions/login';

export default (state = {}, action) => {
  switch (action.type) {
      case LOGIN_SUCCESS:
      case LOGIN_ERROR:
      return {
        ...state,
        login: action.data
      };
      default:
          return state; 
  }
}