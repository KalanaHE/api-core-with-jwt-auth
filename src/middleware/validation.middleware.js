const httpStatus = require('http-status');

const validation = (validate) => (req, res, next) => {
    const { error } = validate(req.body);
    if (error) return res.status(httpStatus.BAD_REQUEST).json({ error: error.details[0].message });
    return next();
};

module.exports = validation;
