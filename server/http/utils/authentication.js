const jwt = require('jsonwebtoken');
const { authentication } = require('../../configuration');

const { privateKey } = authentication;
const { options } = authentication;

function sign(payload) {
  return jwt.sign(payload, privateKey, options);
}

function decode(token) {
  jwt.decode(token, { complete: true });
}

module.exports = {
  sign,
  decode,
};
