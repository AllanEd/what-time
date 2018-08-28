const { webserverHost } = require('../../configuration');

/**
 *
 * @param {function} fn
 */
const accessControl = (req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': webserverHost,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'authorization, content-type',
    'Access-Control-Max-Age': 600,
  });
  next();
};

module.exports = accessControl;
