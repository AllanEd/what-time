import rest from '../helper/rest';
import LOGIN from './actionTypes';

function getLocalStorage() {
  const localStorageData = JSON.parse(localStorage.getItem('login'));
  return localStorageData;
}

function getInitalState() {
  const localStorageData = getLocalStorage();

  if (localStorageData) {
    if (localStorageData.token && localStorageData.loggedInUser) {
      return localStorageData;
    }
  }

  return null;
}

function setLocalStorage(data) {
  localStorage.setItem('login', JSON.stringify(data));
}

function login(name, password) {
  const postData = {
    name,
    password,
  };

  return async (dispatch) => {
    const { token, loggedInUser } = await rest.post('http://localhost:9000/users/login', postData);
    setLocalStorage({
      token,
      loggedInUser,
    });

    dispatch({
      type: LOGIN,
      token,
      loggedInUser,
    });
  };
}

export {
  login,
  getLocalStorage,
  getInitalState,
};
