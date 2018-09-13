import config from '../../configuration';

/**
 *
 * @param {function} fn
 */
const accessControl = (req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': config.web.host,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'authorization, content-type',
    'Access-Control-Max-Age': 600,
  });
  next();
};

export default accessControl;
