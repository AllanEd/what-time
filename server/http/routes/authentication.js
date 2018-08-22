const express = require('express');
const jwt = require('jsonwebtoken');
const { authentication } = require('../../configuration');

const router = express.Router();

const { publicKey } = authentication;
const { options } = authentication;

function create() {
  router.all(
    '/',
    async (req, res, next) => {
      const { baseUrl } = req;
      const loginPath = '/users/login';
      const registerPath = '/users/register';

      if (baseUrl === loginPath || baseUrl === registerPath) {
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
    },
  );

  return router;
}

module.exports.create = create;
