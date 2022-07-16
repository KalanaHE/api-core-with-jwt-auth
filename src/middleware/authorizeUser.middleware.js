const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

const authorizeUser = (requiredRoles) => async (req, res, next) => {
    const token = req.headers['x-access-token'];

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: 'Unauthorized!',
                data: null,
                error: null,
            });
        }
        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            include: {
                role: {
                    select: { name: true, permission: { select: { name: true } } },
                },
            },
        });

        if (!user) return res.status(409).json({ statusCode: 401, message: 'Unauthorized!', data: null, error: null });

        const {
            role: { permission },
        } = user;

        const permissions = permission.map(({ name }) => name);

        const isAuthorized = requiredRoles.every((element) => permissions.indexOf(element) !== -1);

        if (!isAuthorized) return res.status(409).json({ statusCode: 401, message: 'Unauthorized!', data: null, error: null });

        next();
    });
};

module.exports = authorizeUser;
