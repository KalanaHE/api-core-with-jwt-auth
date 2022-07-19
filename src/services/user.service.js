const httpStatus = require('http-status');
const UserRepository = require('../repositories/user.repository');
const { response } = require('../utils/response');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async findUserById(id) {
        try {
            const _user = await this.userRepository.findUnique({
                where: { id },
                include: {
                    role: {
                        select: { name: true, permission: { select: { name: true } } },
                    },
                },
            });
            
            const { role, password: _password, ...user } = _user;
            const { name: userRole, permission: _permission } = role;
            const permissions = _permission.map(({ name }) => name);

            return response(httpStatus.OK, 'User data', { ...user, userRole, permissions });
        } catch (error) {
            return response(httpStatus.INTERNAL_SERVER_ERROR, error.message, null, error);
        }
    }
}

module.exports = new UserService();
