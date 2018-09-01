// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  res.status(500);
  res.json({ error: err.message, status: 500 });
  res.end();
};

export default errorHandler;
