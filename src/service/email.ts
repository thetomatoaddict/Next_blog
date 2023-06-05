import nodemailer from 'nodemailer'



export type EmailData = {
    address: string;
    subject: string;
    body: string;
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

  export async function sendEmailData({address, subject, body} : EmailData) {
    const mailData = {
        from : address,
        to : process.env.AUTH_USER,
        subject : `[BLOG] ${subject}`,
        html :`<h1>${subject}</h1><p>${body}</p><p>보낸사람 : ${address}</p>`

    }
    var message = {
      from: "sender@server.com",
      to: "receiver@sender.com",
      subject: "Message title",
      text: "Plaintext version of the message",
      html: "<p>HTML version of the message</p>"
    }
    console.log(mailData)
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    })

    return transporter.sendMail(mailData)
    

  }