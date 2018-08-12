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

  async function getUserByName(name) {
    let user;

    try {
      user = await userRepository.findByName(name);
    } catch(error) {
      console.error(error);
    }

    return user;
  }

  return {
    createUser,
    getAllUsers,
    getUser,
    createSubscribers,
    getUserByName,
    getAppointments
  };
}

module.exports.create = create;
