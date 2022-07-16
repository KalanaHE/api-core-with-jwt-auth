const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const logger = require('../../utils/logger.util');
const sendMail = require('./index');

// Open template file
var source = fs.readFileSync(path.join(__dirname, 'templates/registered-vehicle-info.hbs'), 'utf8');
// Create email generator
var template = Handlebars.compile(source);

var options = (email, locals) => {
    logger.log('info', `Sending password reset email to ${email}.`, { tags: 'email' });
    return {
        from: `noreply@cepec.com`,
        to: email,
        subject: 'Your Vehicle Details',
        html: template(locals), // Process template with locals - {passwordResetAddress}
    };
};

module.exports = ({ tourGuide, tourGuideVehicle }) => {
    return sendMail(options(tourGuide.email, {tourGuideVehicle}));
};
