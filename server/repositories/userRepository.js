function create({ User }) {
  async function getAll() {
    const users = await User.findAll();
    return users.map(user => user.toUserModel());
  }

  async function add(user) {
    await User.build(user).save();
  }

  async function addMany(users) {
    await User.insertMany(users);
  }

  return {
    getAll,
    add,
    addMany
  };
}

module.exports.create = create;
