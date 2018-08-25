import LOGIN from '../actions/actionTypes';

export default function login(state = null, action) {
  const { token, userData } = action;

  switch (action.type) {
    case LOGIN:
      return { token, userData };
    default:
      return state;
  }
}
