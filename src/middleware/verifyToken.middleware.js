const { PrismaClient } = require('@prisma/client');
const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient({
    // log: ['query', 'info', 'warn', 'error'],
});

const verifyAuthToken = async (req, res, next) => {

    const _token = req.headers['authorization'];

    if (!_token) {
        return res.status(httpStatus.FORBIDDEN).send({
            message: 'No token provided!',
            data: null,
            error: null,
        });
    }

    if (!_token.startsWith('Bearer'))
        return res.status(httpStatus.FORBIDDEN).send({
            message: 'Invalid token!',
            data: null,
            error: null,
        });

    const token = _token.replace('Bearer ', '');

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(httpStatus.UNAUTHORIZED).send({
                message: 'Unauthorized!',
                data: null,
                error: null,
            });
        }
        const user = await prisma.user.findUnique({ where: { id: decoded.id } });
        if (!user)
            return res
                .status(httpStatus.UNAUTHORIZED)
                .json({ statusCode: httpStatus.UNAUTHORIZED, message: 'Unauthorized!', data: null, error: null });
        next();
    });
};

module.exports = verifyAuthToken;
