import { FETCH_USER, SET_PAGE_LOCATION } from '../constants';

const initialState = {
  user: null,
  page: null,
};

function adminReducer(/* istanbul ignore next */ state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, user: action.payload };
    case SET_PAGE_LOCATION:
      return { ...state, page: action.payload };
    default:
      return state;
  }
}

export default adminReducer;