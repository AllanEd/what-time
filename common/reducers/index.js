import { combineReducers } from 'redux';
import login from './loginReducers';
import getAppointments from './appointmentsReducers';

const rootReducer = combineReducers({
  login,
  getAppointments,
});

export default rootReducer;
