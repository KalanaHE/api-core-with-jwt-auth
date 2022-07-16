const routes = require('express').Router();
const { errors } = require('celebrate');
const authRoutes = require('./auth.route');
const userRoutes = require('./user.route');

/** HEALTH CHECK */
routes.get(`${process.env.API_VERSION_PREFIX}/`, (req, res) => res.status(200).json({ message: 'CEPEC TG service is up and running' }));

routes.use(`${process.env.API_VERSION_PREFIX}/auth`, authRoutes);
routes.use(`${process.env.API_VERSION_PREFIX}/user`, userRoutes);

routes.use(errors());

module.exports = routes;
