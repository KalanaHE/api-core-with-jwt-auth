const express = require('express');
const { celebrate } = require('celebrate');
const validations = require('../validations');
const { checkDuplicateUser } = require('../middleware');
const { signUp, signIn } = require('../controllers/auth.controller');

const router = express.Router();

router.route('/signup').post([celebrate(validations.auth.signUp), checkDuplicateUser], signUp);
router.route('/signin').post([celebrate(validations.auth.signIn)], signIn);

module.exports = router;
