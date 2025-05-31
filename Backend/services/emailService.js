const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'talhazaheer.44aug24webbpt@gmail.com', // Replace with your Gmail email
    pass: 'nixb lllr ynza rfag', // Replace with your app-specific password
  },
});

const sendVerificationEmail = async (email, token) => {
  const verificationLink = `http://localhost:5000/api/auth/verify?token=${token}`;
  await transporter.sendMail({
    from: 'talhazaheer.44aug24webbpt@gmail.com',
    to: email,
    subject: 'Verify Your Email',
    html: `<p>Please verify your email by clicking <a href="${verificationLink}">here</a>.</p>`,
  });
};

module.exports = { sendVerificationEmail };