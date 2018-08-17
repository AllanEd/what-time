function create({ User }) {
  async function add(user) {
    const createdUser = await User.create(user);
    return createdUser.toUserModel();
  }

  async function addMany(users) {
    await User.insertMany(users);
  }

  async function getById(id) {
    const user = await User.findById(id);
    return user.toUserModel();
  }

  async function getByName(name) {
    const user = await User.where({name}).findOne().exec();
    return user.toUserModel();
  }

  async function getByEmail(email) {
    const user = await User.findOne({email});

    if (user) {
      return user.toUserModel();
    } 

    throw new Error("User with given Email does not exists");
  }

  async function updateUserById(id, updateData) {
    const user = await User.findByIdAndUpdate(id, updateData, {new: true});
    return user.toUserModel();
  }

  async function deleteUserById(id) {
    const user = await User.findByIdAndDelete(id);
    return user.toUserModel();
  }

  
  return {
    add,
    addMany,
    getById,
    getByName,
    getByEmail,
    updateUserById,
    deleteUserById
  };
}

module.exports.create = create;
