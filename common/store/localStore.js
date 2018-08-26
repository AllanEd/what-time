function get(item) {
  const localStorageData = JSON.parse(localStorage.getItem(item));
  return localStorageData;
}

function set(item, data) {
  localStorage.setItem(item, JSON.stringify(data));
}

export {
  get,
  set,
};
