const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {
    mentorEmail,
    mentorName,
    userEmail,
    userName,
    date,
    time,
  } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to mentor
    await transporter.sendMail({
      from: `"MentorMap" <${process.env.EMAIL_USER}>`,
      to: mentorEmail,
      subject: `New Booking from ${userName}`,
      text: `Hi ${mentorName},\n\nYou have a new session booked by ${userName} on ${date} at ${time}.\n\nEmail: ${userEmail}`,
    });

    // Email to user
    await transporter.sendMail({
      from: `"MentorMap" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: `Booking Confirmed`,
      text: `Hi ${userName},\n\nYour session with ${mentorName} on ${date} at ${time} is confirmed.`,
    });

    return res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
}
