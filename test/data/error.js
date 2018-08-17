const errorMessages = {
  noUserName: {
    error: 'You need a name and password',
    status: 500,
  },
  noPassword: {
    error: 'You need a name and password',
    status: 500,
  },
  wrongUserName: {
    error: 'No user with the given name',
    status: 500,
  },
  wrongPassword: {
    error: 'Wrong password',
    status: 500,
  },
};

module.exports = errorMessages;
