import * as localStore from '../store/localStore';
import { LOGIN } from '../actions/actionTypes';

let json;

const createRequest = (method, url, data) => {
  const loginData = localStore.get(LOGIN);
  const token = loginData ? loginData.token : null;

  const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: token,
  });

  const config = {
    method,
    headers,
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  return new Request(url, config);
};

const get = async (url) => {
  const request = createRequest('GET', url);

  try {
    const response = await fetch(request);
    json = await response.json();
  } catch (err) {
    console.error(err.message);
  }

  return json;
};

const post = async (url, data) => {
  const request = createRequest('POST', url, data);

  try {
    const response = await fetch(request);
    json = await response.json();
  } catch (err) {
    console.error(err.message);
  }

  return json;
};

export default {
  get,
  post,
};
