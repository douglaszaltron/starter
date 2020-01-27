import { combineReducers } from 'redux';
import auth from './auth';
import clients from './clients/reducer';

export default combineReducers({
  auth,
  clients,
});
