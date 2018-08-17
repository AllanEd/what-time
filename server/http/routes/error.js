// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  res.status(500);
  res.json({ error: err.message, status: 500 });
}

module.exports = errorHandler;
