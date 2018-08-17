function create(userRepository) {
  async function getAllUsers() {
    const users = await userRepository.getAll();
    return users;
  }

  async function createUser(user) {
    await userRepository.add(user);
  }

  async function createSubscribers(users) {
    await userRepository.addMany(users);
  }

  async function getUser(id) {
    const user = await userRepository.getById(id);
    return user;
  }

  async function updateLastLogin(user) {
    const userIsObject = typeof user === 'object';
    const userId = userIsObject ? user.id : undefined;

    if (userId === undefined) {
      return;
    }

    const updateData = {
      lastLogin: new Date()
    };

    userRepository.updateUserById(userId, updateData);
  }

  async function getUserByName(name) {
    let user;

    try {
      user = await userRepository.findByName(name);
    } catch(error) {
      console.error(error);
    }

    return user;
  }
  

  async function verifyUser(username, password) {

    if (!username || !password) {
      return "You need a username and password";
    }

    const user = await getUserByName(username);

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
    createUser,
    getAllUsers,
    getUser,
    createSubscribers,
    updateLastLogin,
    getUserByName,
    verifyUser
  };
}

module.exports.create = create;
