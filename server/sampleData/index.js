const users = require('./collections/users');

module.exports = services => {
  const {createUsers} = services.userService;

  function create() {
    createUsers(users);
  }

  return {
    create
  }; 
};
