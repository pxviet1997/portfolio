import express from "express";
import mongoose from "mongoose";

const app = express();

const router = express.Router();

app.use('/send-email', router.post('/', async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`, // sender address
      to: "pxveit1997@gmail.com", // list of receivers
      subject, // Subject line
      text: message, // plain text body
      html: `<p>${message}</p>`, // html body
    });

    console.log("Message sent: " + response.messageId);
    res.status(201).json({ message: 'An email has been sent. Please check you email inbox for account verification instruction' });
  } catch (error) {
    res.json({ status: "ERROR" });

  }

}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));