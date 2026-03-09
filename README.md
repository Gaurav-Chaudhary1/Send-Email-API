# Node.js Email Sender API

A lightweight, production-ready REST API built with Express.js and Nodemailer. This microservice is designed to securely log into an SMTP server (like Gmail) and programmatically deliver both plain-text and richly formatted HTML emails to users.

## 🚀 Key Features

* **SMTP Integration:** Utilizes Nodemailer to establish a secure connection with external mail servers.
* **HTML Template Support:** Capable of sending fully styled HTML emails, allowing for customized branding, embedded links, and complex layouts.
* **Dynamic Payloads:** Accepts JSON payloads via POST requests to dynamically set the recipient (`to`), `subject`, and `message` body.
* **Credential Security:** Bypasses hardcoded passwords by utilizing Google App Passwords and securing all sensitive credentials via `.env` variables.
* **Modern ES6 Syntax:** Built using modern JavaScript `import` modules for clean, maintainable code.

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Mail Client:** Nodemailer
* **Environment Management:** dotenv

## ⚙️ Installation & Setup

1. **Clone the repository:**
   
   git clone https://github.com/Gaurav-Chaudhary1/Send-Email-API.git
   
   cd your-repo-name

2. Install dependencies:
   
   npm install

4. Environment Variables:
   
   Create a .env file in the root directory. You must generate a 16-letter "App Password" from your Google Account settings to use Gmail SMTP.
   
   PORT=5000
   
   EMAIL_USER=your_email@gmail.com
   
   EMAIL_PASS=your_16_letter_app_password

6. Start the server:

   node server.js
   

