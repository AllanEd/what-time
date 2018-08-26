const { host } = require('../../configuration');

/**
 *
 * @param {function} fn
 */
const accessControl = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', host);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

module.exports = accessControl;
