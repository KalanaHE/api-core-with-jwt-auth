const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

const verifyAuthToken = async (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).send({
            message: 'No token provided!',
            data: null,
            error: null,
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: 'Unauthorized!',
                data: null,
                error: null,
            });
        }
        const user = await prisma.user.findUnique({ where: { id: decoded.id } });
        if (!user) return res.status(409).json({ statusCode: 401, message: 'Unauthorized!', data: null, error: null });
        next();
    });
};

module.exports = verifyAuthToken;
