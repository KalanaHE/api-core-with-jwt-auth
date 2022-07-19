const { PrismaClient } = require('@prisma/client');
const httpStatus = require('http-status');

const prisma = new PrismaClient({
    // log: ['query', 'info', 'warn', 'error'],
});

const validateForDuplicateUser = async (req, res, next) => {
    const { email } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    if (user)
        return res.status(httpStatus.CONFLICT).json({ statusCode: httpStatus.CONFLICT, message: 'User already exists!', data: null, error: null });
    return next();
};

module.exports = validateForDuplicateUser;
