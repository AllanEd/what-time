function create({ userService }) {
  async function controller(req, res, next, id) {
    const user = await userService.getUser(id);
    req.user = user;
    next();
  };

  return controller;
}

module.exports.create = create;