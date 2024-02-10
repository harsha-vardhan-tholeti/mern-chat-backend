function errorHandler(message, statusCode) {
  const error = new Error(message);
  error.statusCode = statusCode;
  Error.captureStackTrace(error, errorHandler);

  return error;
}

module.exports = errorHandler;
