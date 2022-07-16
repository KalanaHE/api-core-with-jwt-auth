const asyncHandler = require('./asyncHandler.middleware');
const validation = require('./validation.middleware');
const checkDuplicateUser = require('./validateDuplicateUser.middleware');
const verifyAuthToken = require('./verifyToken.middleware');
const authorizeUser = require('./authorizeUser.middleware');

module.exports = {
    asyncHandler,
    validation,
    checkDuplicateUser,
    verifyAuthToken,
    authorizeUser
};
