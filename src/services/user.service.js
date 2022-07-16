const httpStatus = require('http-status');
const UserRepository = require('../repositories/user.repository');
const { response } = require('../utils/response');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async findUserById(id) {
        try {
            const user = await this.userRepository.findUnique({ where: { id } });

            return response(httpStatus.OK, 'User data', user);
        } catch (error) {
            return response(httpStatus.INTERNAL_SERVER_ERROR, error.message, null, error);
        }
    }
}

module.exports = new UserService();
