// catch 404 and forward to error handler
module.exports = async (req, res, next) => {
  const error = new Error('Page Not Found');
  error.status = 404;
  next(error);
};
