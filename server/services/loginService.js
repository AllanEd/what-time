function create(userService) {
  async function verifyUser(username, password) {

    if (!username || !password) {
      return "You need a username and password";
    }

    const user = await userService.getUserByName(username);

    const userExists = user !== undefined;
    let isPasswordValid = false;

    if (userExists) {
      isPasswordValid = user.isPasswordValid(password);
    } else {
      return "No user with the given username";
    }

    if (isPasswordValid) {
      delete user.password
      return user;
    } 
      
    return "Wrong password";
  };

  return {
    verifyUser
  };
}

module.exports.create = create;