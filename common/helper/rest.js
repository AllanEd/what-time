const getHttpOptions = (methodName, data) => ({
  method: methodName,
  body: JSON.stringify(data),
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
});

let json;

const get = async (url) => {
  try {
    const response = await fetch(url);
    json = await response.json();
  } catch (err) {
    console.error(err.message);
  }

  return json;
};

const post = async (url, data) => {
  try {
    const response = await fetch(url, getHttpOptions('POST', data));
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
