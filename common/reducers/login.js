import LOGIN from '../actions/actionTypes';

export default function login(state = null, action) {
  const { token, loggedInUser } = action;

  switch (action.type) {
    case LOGIN:
      return { token, loggedInUser };
    default:
      return state;
  }
}
