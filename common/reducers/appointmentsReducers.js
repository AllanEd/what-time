import { actionTypes } from '../actions';

export default function getAppointments(state = null, action) {
  switch (action.type) {
    case actionTypes.GET_APPOINTMENTS:
      return action;
    default:
      return state;
  }
}
