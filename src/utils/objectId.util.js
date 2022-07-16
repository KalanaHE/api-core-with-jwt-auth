const Joi = require('@hapi/joi');
const joiObjectId = require('joi-objectid');

module.exports = Joi.objectId = joiObjectId(Joi);
