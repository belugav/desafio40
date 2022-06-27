const nodemailer = require("nodemailer");
const { PASS_GMAIL } = require("../../config/globals");

exports.transporterEthereal = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: 'royal.fahey54@ethereal.email',
    pass: 'hVNRP2vkry2pwKxkWN',
},
});

exports.transporterGmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "belengavito1993ar@gmail.com",
    pass: PASS_GMAIL,
  },
});
