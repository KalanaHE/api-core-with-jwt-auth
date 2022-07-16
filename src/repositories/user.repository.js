/* eslint-disable class-methods-use-this */
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

class UserRepository {
    async create(data) {
        const user = await prisma.user.create({ data });
        return user;
    }

    async findUnique(data) {
        const user = await prisma.user.findUnique(data);
        return user;
    }
}

module.exports = UserRepository;
