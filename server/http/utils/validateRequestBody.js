import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';

const checkValueLength = (body) => {
  Object.keys(body).forEach((key) => {
    if (isLength(body[key], { min: 0, max: 1000 }) === false) {
      throw new Error('Value is big');
    }
  });
};

const validateEmail = (email) => {
  if (isEmail(email) === false) {
    throw new Error('Invalid Email');
  }
};

const validateInput = (req, res, next) => {
  const { body } = req;

  if (body === undefined) {
    next();
  }

  checkValueLength(body);

  if (body.email) {
    validateEmail(body.email);
  }

  next();
};

export default validateInput;
