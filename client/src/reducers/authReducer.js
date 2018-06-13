import { FETCH_USER } from '../constants';

const initialState = {
  user: null,
};

function adminReducer(/* istanbul ignore next */ state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export default adminReducer;