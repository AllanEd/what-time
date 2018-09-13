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

  const { token, loggedInUser } = await http.post(`${process.env.REACT_APP_API_HOST}/api/users/login`, postData);

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
