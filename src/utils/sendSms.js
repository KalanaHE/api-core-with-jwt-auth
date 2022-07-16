const accountSid = 'ACcd5e4c0888b87eb16ef0fe4157a0d92a';
const authToken = '9e6835e46235a0795c67455c6341ff08';
const client = require('twilio')(accountSid, authToken);

try {
    client.messages
        .create({
            messagingServiceSid: 'MG6f574540354a9ad1c8572c6684d687fb',
            body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
            to: '+94718901224',
        })
        .then((message) => console.log(message));
} catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
}
