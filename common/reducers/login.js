import LOGIN from '../actions/actionTypes';
import { getInitalState } from '../actions/loginActions';

const initialState = getInitalState();

export default function login(state = initialState, action) {
  const { token, loggedInUser } = action;

  switch (action.type) {
    case LOGIN:
      return {
        token,
        loggedInUser,
      };
    default:
      return state;
  }
}
