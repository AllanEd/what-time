const jwt = require('jsonwebtoken');
const { authentication } = require('../../configuration');

const { publicKey } = authentication;
const { privateKey } = authentication;
const { options } = authentication;

function verify(req, res, next) {
  const { originalUrl } = req;
  const pathWithoutAuthNeeded = ['/users/login', '/users/login/', '/users/register', '/users/register/'];

  if (pathWithoutAuthNeeded.includes(originalUrl)) {
    next();
    return;
  }

  try {
    req.authentication = jwt.verify(req.headers.authorization, publicKey, options);
    next();
  } catch (err) {
    console.error(err);
    next(new Error('You are not authorized'));
  }
}

function sign(payload) {
  return jwt.sign(payload, privateKey, options);
}

function decode(token) {
  jwt.decode(token, { complete: true });
}

module.exports = {
  verify,
  sign,
  decode,
};
