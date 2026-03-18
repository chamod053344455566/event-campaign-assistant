import express from 'express';
import bodyParser from 'body-parser';
import twilio from 'twilio';

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing incoming request bodies
app.use(bodyParser.json());

// Twilio credentials
const ACCOUNT_SID = 'your_account_sid'; // Replace with your Twilio account SID
const AUTH_TOKEN = 'your_auth_token'; // Replace with your Twilio auth token
const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

// WhatsApp webhook endpoint
app.post('/whatsapp-webhook', (req, res) => {
    const { body } = req;

    // Log incoming messages
    console.log('Incoming message:', body);

    // Handle incoming messages
    const incomingMsg = body.Body;
    const from = body.From;

    // Respond to incoming message
    client.messages
        .create({
            body: `You said: ${incomingMsg}`,
            from: 'whatsapp:your_twilio_whatsapp_number', // Replace with your Twilio WhatsApp number
            to: from,
        })
        .then(message => console.log('Response sent:', message.sid))
        .catch(error => console.error('Error sending message:', error));

    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
