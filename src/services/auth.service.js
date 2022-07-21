const httpStatus = require('http-status');
const UserRepository = require('../repositories/user.repository');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { response } = require('../utils/response');

class AuthService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async signUp(data) {
        try {
            const { password: _password, ...userData } = data;
            const password = bcrypt.hashSync(_password, parseInt(process.env.SALT_ROUNDS));
            const createdUser = await this.userRepository.create({ password, roleId: 1, ...userData });  //roleId: 1 is for general user

            //auto login flow after signup
            const user = await this.userRepository.findUnique({
                where: { email: userData.email },
                include: {
                    role: {
                        select: { name: true, permission: { select: { name: true } } },
                    },
                },
            });
            if (user) {
                const token = jwt.sign({ id: createdUser.id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_LIFESPAN, // 1min = 60 seconds
                });

                const { role, password: _password, ..._user } = user;

                const { name: userRole, permission: _permission } = role;
                const permissions = _permission.map(({ name }) => name);

                return response(httpStatus.OK, 'User signed up successfully', { ..._user, userRole, permissions, token });
            }

            return response(httpStatus.INTERNAL_SERVER_ERROR, null, null, null);
        } catch (error) {
            return response(httpStatus.INTERNAL_SERVER_ERROR, error.message, null, error);
        }
    }

    async signIn(data) {
        try {
            const { email, password } = data;
            const user = await this.userRepository.findUnique({
                where: { email },
                include: {
                    role: {
                        select: { name: true, permission: { select: { name: true } } },
                    },
                },
            });
            if (!user) {
                return response(httpStatus.NOT_FOUND, 'User not found', null);
            }
            const isValid = bcrypt.compareSync(password, user.password);
            if (!isValid) {
                return response(httpStatus.UNAUTHORIZED, 'Invalid password', null);
            }

            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_LIFESPAN, // 1min = 60 seconds
            });

            const { role, password: _password, ..._user } = user;

            const { name: userRole, permission: _permission } = role;
            const permissions = _permission.map(({ name }) => name);

            return response(httpStatus.OK, 'User signed in successfully', { ..._user, userRole, permissions, token });
        } catch (error) {
            return response(httpStatus.INTERNAL_SERVER_ERROR, error.message, null, error);
        }
    }
}

module.exports = new AuthService();
