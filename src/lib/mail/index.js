var nodemailer = require('nodemailer');
const logger = require('../../utils/logger.util');

// Assumes we use gmail
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',

    port: 587,
    auth: {
        user: 'corebrain.app@gmail.com',
        pass: 'ibjryharxsqslrbf',
    },
});

module.exports = (mailOptions) => {
    transporter.sendMail(mailOptions, function (err, info) {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
        if (err) return logger.info('error', JSON.stringify(err), { tags: 'email' });
        if (info) return logger.info('info', JSON.stringify(info), { tags: 'email' });
        return null;
    });
};
