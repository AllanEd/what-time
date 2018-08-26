import http from '../helper/rest';

function getAppointments() {
  return async (dispatch) => {
    // TODO: Apply dispatcher
    const appointments = await http.get('http://localhost:9000/api/users/appointments');
  };
}

export default getAppointments;
