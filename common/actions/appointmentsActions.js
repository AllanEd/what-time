import http from '../helper/rest';
import { GET_APPOINTMENTS } from './actionTypes';

const getAppointments = () => async (dispatch) => {
  const appointments = await http.get('http://localhost:9000/api/users/appointments');

  dispatch({
    type: GET_APPOINTMENTS,
    appointments,
  });
};

export default getAppointments;
