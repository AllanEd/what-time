function create({ User }) {
  async function getAll() {
    const users = await User.find();
    return users.map(user => user.toUserModel());
  }

  async function add(user) {
    await User.build(user).save();
  }

  async function addMany(users) {
    await User.insertMany(users);
  }

  async function findByName(name) {
    const populateDocs = [ 
      {
        path : 'createdAppointments',
        populate : [ 
            { path: 'creator', select: ['name', 'email'] },
            { path: 'subscribers', select: ['name', 'email'] },
            { path: 'weeks', select: 'startDate' }
          ]
      },
      'subscribedAppointments'
    ];
    const user = await User.where({name}).findOne().populate(populateDocs).exec();
    return user.toUserModel();
  }

  return {
    getAll,
    add,
    addMany,
    findByName
  };
}

module.exports.create = create;
