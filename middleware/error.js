const errorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // wrong mongodb id error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = errorHandler(message, 400);
  }

  //mongoose duplicate key error
  if (err.name === "11000") {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = errorHandler(message, 400);
  }

  //Wrong JWT Error
  if (err.name === "JsonWebTokenError") {
    const message = `Resource not found. Invalid ${err.path}`;
    err = errorHandler(message, 400);
  }

  //Token Expired Error
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is Expired, Try Again`;
    err = errorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    status: err.statusCode,
    message: err.message,
  });
};
