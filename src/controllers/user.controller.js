const { asyncHandler } = require('../middleware');
const userService = require('../services/user.service');

const findUserById = asyncHandler(async (req, res) => {
    const {
        params: { id },
    } = req;
    const data = await userService.findUserById(id);
    return res.status(data.statusCode).json(data);
});

module.exports = { findUserById };
