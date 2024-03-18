// server.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
// const { PORT, SENDGRID_API_KEY, EMAIL_FROM } = require('./config'); // Import your configuration

const app = express();
app.use(bodyParser.json());

// Endpoint to handle user signup
app.post('/api/signup', async (req, res) => {
  try {
    const { fullName, email } = req.body;

    // Generate a random 6-digit verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000);

    // Send email with verification code
    const transporter = nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: 'apikey',
        pass: SENDGRID_API_KEY // Your SendGrid API key
      }
    });

    await transporter.sendMail({
      from: EMAIL_FROM, // Sender email address
      to: email,
      subject: 'Verification Code',
      text: `Your verification code is: ${verificationCode}`
    });

    // You can save the verification code in your database for verification purposes later

    res.status(200).json({ message: 'Verification code sent successfully' });
  } catch (error) {
    console.error('Error sending verification code:', error);
    res.status(500).json({ error: 'An error occurred while sending the verification code' });
  }
});

app.listen(8000,() => {
  console.log(`Server is running on port ${PORT}`);
});
