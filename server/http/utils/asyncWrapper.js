/**
 *
 * @param {function} fn
 */
const asyncWrapper = fn => async (req, res, next) => {
  try {
    await fn(req, res);
    return;
  } catch (err) {
    next(err);
  }
};

export default asyncWrapper;
