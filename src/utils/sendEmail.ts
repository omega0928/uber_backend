import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "sandbox68c2bcd2bc3c45bd9271dda2ec58237f.mailgun.org"
});

const sendEmail = (subject: string, html: string) => {
  const emailData = {
    from: "omega0928@naver.com",
    to: "omega0928@naver.com",
    subject,
    html
  };
  return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullname: string, key: string) => {
  const emailSubject = `Hello! ${fullname}, please verify your email`;
  const emailBody = `Verify your email by clicking <a href="http://nuber.com/verification/${key}">here</a>`
  return sendEmail(emailSubject, emailBody);
}