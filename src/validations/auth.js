const { Joi, Segments } = require('celebrate');

module.exports = {
    signUp: {
        [Segments.BODY]: {
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required(),
            mobile: Joi.string().min(10).required(),
            gender: Joi.string().valid('MALE', 'FEMALE'),
            dateOfBirth: Joi.date(),
        },
    },
    signIn: {
        [Segments.BODY]: {
            email: Joi.string().required(),
            password: Joi.string().required(),
        },
    },
};
