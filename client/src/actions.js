import {
  FETCH_USER,
  SET_PAGE_LOCATION,
} from './constants';

export function fetchUserData(data) {
  return {
    type: FETCH_USER,
    payload: data,
  };
}

export function setStripeResponseToState(token) {
  return {
    type: FETCH_USER,
    payload: token,
  };
}

export function setPageLocation(url) {
  return {
    type: SET_PAGE_LOCATION,
    payload: url,
  };
}
