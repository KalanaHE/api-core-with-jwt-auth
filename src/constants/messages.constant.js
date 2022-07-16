/* eslint-disable no-multi-spaces */

/** SERVER */
const SERVER_STARED = 'BACKEND SERVICE STARTED..';

/** AUTH */
const ACCOUNT_PENDING = 'Email has not been verified. Please check your email and try again';
const EMAIL_ALREADY_EXISTS = 'You already has an account registered with this email. Please login to continue.';
const INVALID_CREDENTIALS = 'Email or password is incorrect';
const INVALID_USER = 'User does not exist';
const USER_NOT_AUTHORIZED = 'User not authorized';
const INVALID_TOKEN = 'Invalid token';
const INVALID_RESET_TOKEN = 'Invalid reset password token';
const NO_TOKEN_PROVIDED = 'Access denied. No token provided.';
const INCORRECT_PASSWORD = 'Password is incorrect';
const USER_ALREADY_VERIFIED = 'This account has been verified already';
const ACCOUNT_CLOSED = 'Your account was closed. You can log in any time to activate the account.';
const UNAUTHORIZED = 'Unauthorized';
const USER_UPDATED = 'User Updated';
const USER_BLOCKED = 'Unauthorized. You are blocked by the admin.';
const USER_REGISTERED = 'User registered successfully.';
const USER_LOG_OUT_SUCCESS = 'User log out successfully.';

module.exports = {
  SERVER_STARED,
  ACCOUNT_PENDING,
  EMAIL_ALREADY_EXISTS,
  INVALID_CREDENTIALS,
  INVALID_USER,
  USER_NOT_AUTHORIZED,
  INVALID_TOKEN,
  INVALID_RESET_TOKEN,
  NO_TOKEN_PROVIDED,
  INCORRECT_PASSWORD,
  USER_ALREADY_VERIFIED,
  ACCOUNT_CLOSED,
  UNAUTHORIZED,
  USER_UPDATED,
  USER_BLOCKED,
  USER_REGISTERED,
  USER_LOG_OUT_SUCCESS,
};
