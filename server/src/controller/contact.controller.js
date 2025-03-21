import nodemailer from "nodemailer";
// import Mailjet from "node-mailjet";

export const sendMail = async (req, res) => {
  try {
      
      const { name, email, subject, message } = req.body;
      
    //   const mailjet = new Mailjet({
    //     apiKey: process.env.MJ_APIKEY_PUBLIC || "your-api-key",
    //     apiSecret: process.env.MJ_APIKEY_PRIVATE || "your-api-secret",
    //   });
    // const request = await mailjet.post("send", { version: "v3.1" }).request({
    //   Messages: [
    //     {
    //       From: {
    //         Email: "rajureavinash7@gmail.com",
    //         Name: "Avinash Rajure",
    //       },
    //       To: [
    //         {
    //           Email: "avinashrajure75@gmail.com",
    //           Name: "Avinash Rajure 75",
    //         },
    //       ],
    //       Subject: subject,
    //       TextPart: `${message}\n\nFrom: ${name} <${email}>`,
    //     },
    //   ],
    // });

    // console.log(request);

    // const request =await mailjet
    // .post('send', { version: 'v3.1' })
    // .request({
    //   Messages: [
    //     {
    //       From: {
    //         Email: "rajureavinash7@gmail.com",
    //         Name: "avinash"
    //       },
    //       To: [
    //         {
    //           Email: "avinashrajure75@gmail.com",
    //           Name: "passenger 1"
    //         }
    //       ],
    //       Subject: subject,
    //       TextPart: `${message}\n\nFrom: ${name} <${email}>`
    //     }
    //   ]
    // })

    // console.log(request);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    await transporter.sendMail({
      from: {
        name: name,
        address: email,
      },
      to: process.env.ADMIN_USER,
      subject: subject,
      text: `${message}\n\nFrom: ${name} <${email}>`,
    });
    res.status(200).json({ message: "Mail sent successfully" });
  } catch (error) {
    console.log(error);
  }
};
