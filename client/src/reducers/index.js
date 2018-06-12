import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';

export default function createReducer() {
  return combineReducers({
    auth: authReducer,
    form: reduxForm,
  });
}