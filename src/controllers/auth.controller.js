const { asyncHandler } = require('../middleware');
const authService = require('../services/auth.service');

const signUp = asyncHandler(async (req, res) => {
    const { body } = req;
    const data = await authService.signUp(body);
    return res.status(data.statusCode).json(data);
});

const signIn = asyncHandler(async (req, res) => {
    const { body } = req;
    const data = await authService.signIn(body);
    return res.status(data.statusCode).json(data);
});

module.exports = { signUp, signIn };
