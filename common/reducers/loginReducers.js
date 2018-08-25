import { actionTypes, loginActions } from '../actions';

const initialState = loginActions.getInitalState();

export default function login(state = initialState, action) {
  const { token, loggedInUser } = action;

  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        token,
        loggedInUser,
      };
    default:
      return state;
  }
}
