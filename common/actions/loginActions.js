import rest from '../helper/rest';
import LOGIN from './actionTypes';

function login(name, password) {
  const postData = {
    name,
    password,
  };

  return async (dispatch) => {
    const { token, loggedInUser } = await rest.post('http://localhost:9000/users/login', postData);
    dispatch({
      type: LOGIN,
      token,
      loggedInUser,
    });
  };
}

export default {
  login,
};
