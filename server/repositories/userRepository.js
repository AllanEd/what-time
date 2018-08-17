function create({ User }) {
  async function getAll() {
    const users = await User.find();
    return users.map(user => user.toUserModel());
  }

  async function add(user) {
    const createdUser = await User.create(user);
    return createdUser.toUserModel();
  }

  async function addMany(users) {
    await User.insertMany(users);
  }

  async function findByName(name) {
    const user = await User.where({name}).findOne().exec();
    return user.toUserModel();
  }

  async function getById(id) {
    const user = await User.findById(id);
    return user.toUserModel();
  }

  async function updateUserById(id, updateData) {
    const user = await User.findByIdAndUpdate(id, updateData)
    return user.toUserModel();
  }

  
  return {
    getAll,
    add,
    addMany,
    findByName,
    getById,
    updateUserById
  };
}

module.exports.create = create;
