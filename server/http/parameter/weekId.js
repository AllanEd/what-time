function create({ weekService }) {
  async function controller(req, res, next, id) {
    const week = await weekService.getWeek(id);
    req.week = week;
    next();
  };

  return controller;
}

module.exports.create = create;