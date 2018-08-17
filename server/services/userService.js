const bcrypt = require('bcrypt');
const isEmail = require('validator/lib/isEmail');
const isEmpty = require('validator/lib/isEmpty');

function create(userRepository) {
  function validateInput(inputData) {
    if (isEmail(inputData.email) === false) {
      throw new Error("Invalid Email");
    }
  }

  function requiredFields(inputData) {
    Object.keys(inputData).forEach(key => {
      if (inputData[key] === undefined) {
        throw new Error("Not all Data is given");
      } else if (isEmpty(inputData[key])) {
        throw new Error("Not all Data is given");
      }
    });
  }

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
      user = await userRepository.getByName(name);
    } catch(error) {
      throw new Error("No user with the given name");
    }

    return user;
  }
  

  async function verifyUser(name, password) {
    requiredFields({name, password});

    const user = await getUserByName(name);
    let isPasswordValid = false;

    isPasswordValid = user.isPasswordValid(password);

    if (isPasswordValid) {
      return user;
    } 
      
    throw new Error("Wrong password");
  };

  async function doesEmailExists(email) {
    let emailExists;

    try {
      await userRepository.getByEmail(email);
      emailExists = true;
    } catch(error) {
      emailExists = false;
    }

    return emailExists;
  }

  async function registerUser(name, password, email) {
    validateInput({email});
    requiredFields({name, password, email});

    const emailAlreadyExists = await doesEmailExists(email);

    if (emailAlreadyExists) {
      throw new Error("Email already exists");
    }

    const saltRounds = 10;
    const newUserData = {
      name,
      password: bcrypt.hashSync(password, saltRounds),
      email,
      registered: new Date(),
      lastLogin: new Date()
    }

    const newUser = await userRepository.add(newUserData);
    return newUser;
  }

  
  return {
    createUser,
    getAllUsers,
    getUser,
    createSubscribers,
    updateLastLogin,
    getUserByName,
    verifyUser,
    registerUser
  };
}

module.exports.create = create;
