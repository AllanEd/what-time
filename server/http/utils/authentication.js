import jwt from 'jsonwebtoken';
import config from '../../configuration';

const { publicKey } = config.authentication;
const { privateKey } = config.authentication;
const { options } = config.authentication;

const verify = (req, res, next) => {
  const { originalUrl } = req;
  const pathWithoutAuthNeeded = ['/api/users/login', '/api/users/login/', '/api/users/register', '/api/users/register/'];

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
};

const sign = payload => jwt.sign(payload, privateKey, options);

const decode = (token) => {
  jwt.decode(token, { complete: true });
};

export default {
  verify,
  sign,
  decode,
};
