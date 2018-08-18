const jwt = require('jsonwebtoken');
const { authentication } = require('../../configuration');

const { privateKey } = authentication;
const { publicKey } = authentication;
const options = {
  issuer: authentication.issuer,
  subject: authentication.subject,
  audience: authentication.audience,
  expiresIn: authentication.expiresIn,
  algorithm: authentication.algorithm,
};

function sign(payload) {
  return jwt.sign(payload, privateKey, options);
}

function verify(req, res, next) {
  if (req.headers.authorization) {
    try {
      req.authentication = jwt.verify(req.headers.authorization, publicKey, options);
      req.authorized = true;
    } catch (err) {
      console.error(err);
      req.authorized = false;
    }
  } else {
    req.authorized = false;
  }

  next();
}

function decode(token) {
  jwt.decode(token, { complete: true });
}

module.exports = {
  sign,
  verify,
  decode,
};
