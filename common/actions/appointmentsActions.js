import http from '../helper/rest';
import { GET_APPOINTMENTS } from './actionTypes';

const getAppointments = () => async (dispatch) => {
  const appointments = await http.get(`${process.env.REACT_APP_API_HOST}/api/users/appointments`);

  dispatch({
    type: GET_APPOINTMENTS,
    appointments,
  });
};

export default getAppointments;
