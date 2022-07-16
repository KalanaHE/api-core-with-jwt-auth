const { Joi, Segments } = require('celebrate');

module.exports = {
    findUserById: {
        [Segments.PARAMS]: {
            id: Joi.number().required(),
        },
    },
};
