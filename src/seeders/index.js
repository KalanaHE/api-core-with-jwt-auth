const { PrismaClient } = require('@prisma/client');
const userRoles = require('./data/userRoles.json');
const userPermissions = require('./data/userPermissions.json');
const prisma = new PrismaClient();

const load = async () => {
    try {
        await prisma.role.createMany({
            data: userRoles,
            skipDuplicates: true,
        });
        console.info('user roles added!');

        await prisma.permission.createMany({
            data: userPermissions,
            skipDuplicates: true,
        });
        console.info('user permissions added!');

    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};

load();
