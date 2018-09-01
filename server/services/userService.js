import bcrypt from 'bcrypt';
import isEmpty from 'validator/lib/isEmpty';

const requiredFields = (inputData) => {
  Object.keys(inputData).forEach((key) => {
    if (inputData[key] === undefined) {
      throw new Error('Not all Data is given');
    } else if (isEmpty(inputData[key])) {
      throw new Error('Not all Data is given');
    }
  });
};

const create = (userRepository) => {
  async function getUser(id) {
    const user = await userRepository.getById(id);
    return user;
  }

  async function getUserByName(name) {
    let user;

    try {
      user = await userRepository.getByName(name);
    } catch (error) {
      throw new Error('No user with the given name');
    }

    return user;
  }

  async function createUser(user) {
    await userRepository.add(user);
  }

  async function createUsers(users) {
    await userRepository.addMany(users);
  }

  async function editUser(user, requestData) {
    const { id } = user;
    const mergedUser = Object.assign(user, requestData);
    const updatedUser = await userRepository.updateUserById(id, mergedUser);
    return updatedUser;
  }

  async function deleteUser(user) {
    const { id } = user;
    const updatedUser = await userRepository.deleteUserById(id);
    return updatedUser;
  }

  async function updateLastLogin(user) {
    const userIsObject = typeof user === 'object';
    const userId = userIsObject ? user.id : undefined;

    if (userId === undefined) {
      return;
    }

    const updateData = {
      lastLogin: new Date(),
    };

    userRepository.updateUserById(userId, updateData);
  }

  async function verifyUser(name, password) {
    requiredFields({ name, password });

    const user = await getUserByName(name);
    let isPasswordValid = false;

    isPasswordValid = user.isPasswordValid(password);

    if (isPasswordValid) {
      return user;
    }

    throw new Error('Wrong password');
  }

  async function doesEmailExists(email) {
    let emailExists;

    try {
      await userRepository.getByEmail(email);
      emailExists = true;
    } catch (error) {
      emailExists = false;
    }

    return emailExists;
  }

  async function registerUser(name, password, email) {
    requiredFields({ name, password, email });

    const emailAlreadyExists = await doesEmailExists(email);

    if (emailAlreadyExists) {
      throw new Error('Email already exists');
    }

    const saltRounds = 10;
    const newUserData = {
      name,
      password: bcrypt.hashSync(password, saltRounds),
      email,
      registered: new Date(),
      lastLogin: new Date(),
    };

    const newUser = await userRepository.add(newUserData);
    return newUser;
  }


  return {
    getUser,
    getUserByName,
    createUser,
    createUsers,
    deleteUser,
    editUser,
    updateLastLogin,
    verifyUser,
    registerUser,
  };
};

export default { create };
