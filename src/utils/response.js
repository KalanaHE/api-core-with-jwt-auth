module.exports = {
  response(httpStatus, message, data, error) {
    return {
      statusCode: httpStatus || 500,
      message: message || 'Something went wrong!',
      data,
      error,
    };
  },
};
