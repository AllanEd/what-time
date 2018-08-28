import http from '../helper/rest';
import { LOGIN } from './actionTypes';
import * as localStore from '../store/localStore';

function getInitalState() {
  const localStorageData = localStore.get(LOGIN);

  if (localStorageData) {
    if (localStorageData.token && localStorageData.loggedInUser) {
      return localStorageData;
    }
  }

  return null;
}

const login = (name, password) => async (dispatch) => {
  const postData = {
    name,
    password,
  };

  const { token, loggedInUser } = await http.post('http://localhost:9000/api/users/login', postData);

  localStore.set(
    LOGIN,
    {
      token,
      loggedInUser,
    },
  );

  dispatch({
    type: LOGIN,
    token,
    loggedInUser,
  });
};

export {
  login,
  getInitalState,
};
