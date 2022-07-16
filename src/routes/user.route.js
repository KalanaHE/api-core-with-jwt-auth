const express = require('express');
const { celebrate } = require('celebrate');
const validations = require('../validations');
const { findUserById } = require('../controllers/user.controller');
const { verifyAuthToken, authorizeUser } = require('../middleware');

const router = express.Router();

router.route('/:id').get([celebrate(validations.user.findUserById), verifyAuthToken, authorizeUser(['VIEW_GENERAL_USER_HOME'])], findUserById);

module.exports = router;
