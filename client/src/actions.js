import {
  FETCH_USER,
} from './constants';

export function fetchUserData(data) {
  return {
    type: FETCH_USER,
    payload: data,
  };
}
