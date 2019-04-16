import { combineReducers } from 'redux';
import baseReducer from './base.reducer';

export default combineReducers({
  base: baseReducer,
});
