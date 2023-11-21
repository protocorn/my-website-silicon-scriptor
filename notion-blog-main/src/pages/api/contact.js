import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Your email service configuration
      service: 'gmail',
      auth: {
        user: 'siliconscriptor@gmail.com', // Replace with your email
        pass: 'gitprotonguy65git', // Replace with your password or use an app-specific password
      },
    });

    // Email options
    const mailOptions = {
      from: `${email}`,
      to: 'siliconscriptor@gmail.com', // Replace with your email
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
