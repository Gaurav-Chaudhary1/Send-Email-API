import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to read the JSON data
app.use(express.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Email sender router
app.post('/api/send-email', async (req, res) => {
    try {
        const { to, subject, message } = req.body;

        if (!to || !subject || !message) {
            return res.status(400).json({ message: 'Please enter to or subject or message correctly' });
        }

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: to,
            subject: subject,
            html: message
        }

        const info = await transporter.sendMail(mailOptions);

        console.log("Email sent successfully: ", info.response);

        res.status(200).json({
            success: true,
            message: "Email delivered successfully!"
        });
    } catch (err) {
        console.error("Error sending email:", err);
        res.status(500).json({
            success: false,
            error: "Failed to send email. Check your credentials."
        });
    }
});

// Start a server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});