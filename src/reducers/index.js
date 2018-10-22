import { combineReducers } from 'redux';
import searchReducer from './search';
import loginReducer from './login';

export default combineReducers({
  login: loginReducer,
  search: searchReducer
})
