/* eslint-disable no-unused-vars */
const express = require('express');
const { errors } = require('celebrate');
const bodyParser = require('body-parser');
const colors = require('colors');
const morgan = require('morgan');
const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const log = require('./src/utils/logger.util');
const { SERVER_STARED } = require('./src/constants/messages.constant');
const routes = require('./src/routes');
const objectIdValidation = require('./src/utils/objectId.util');
const { ENVIRONMENTS } = require('./src/enums');
const limiterOptions = require('./src/constants/options.constant');

const { API_PORT } = process.env;

const app = express();

app.use(errors());

app.use(helmet());
app.use(hpp());
app.use(rateLimit(limiterOptions));

// app.use(
//     cors({
//         origin(origin, callback) {
//             if (!origin) return callback(null, true);
//             if (["frabjous-cassata-ba205e.netlify.app"].indexOf(origin) === -1) {
//                 const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//                 return callback(new Error(msg), false);
//             }
//             return callback(null, true);
//         },
//         credentials: true,
//         exposedHeaders: ['x-access-token'],
//     })
// );

app.use(cors({ origin: '*' }));

if (process.env.NODE_ENV === ENVIRONMENTS.DEVELOPMENT) {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);
objectIdValidation();

app.listen(API_PORT, () => {
    log.info('==========================================================================');
    log.info(`${SERVER_STARED} | MODE: ${process.env.NODE_ENV} | PORT: ${API_PORT}`.green.bold);
    log.info('==========================================================================');
});

process.on('unhandledRejection', (ex) => {
    log.error(ex.message.red.bold);
});
