const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

const validateForDuplicateUser = async (req, res, next) => {
    const { email } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    if (user) return res.status(409).json({ statusCode: 409, message: 'User already exists!', data: null, error: null });
    return next();
};

module.exports = validateForDuplicateUser;
