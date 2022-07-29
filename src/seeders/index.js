const { PrismaClient } = require('@prisma/client');
const userRoles = require('./data/userRoles.json');
const userPermissions = require('./data/userPermissions.json');
const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

const seed = async () => {
    try {
        await prisma.$transaction(async (prisma) => {
            const _createdRoles = await prisma.role.createMany({
                data: userRoles,
                skipDuplicates: true,
            });
            console.info('user roles added!');

            if (_createdRoles) {
                await prisma.permission.createMany({
                    data: userPermissions,
                    skipDuplicates: true,
                });
                console.info('user permissions added!');
            }
        });
    } catch (e) {
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};

seed();
