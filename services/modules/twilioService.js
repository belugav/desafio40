const {
  TWILIO_AUTH_TOKEN,
  ACCOUNT_TWILIO_SID,
} = require("../../config/globals");
const twilioClient = require("twilio")(ACCOUNT_TWILIO_SID, TWILIO_AUTH_TOKEN);

exports.sendSMS = async (smsContent) => {
  try {
    await twilioClient.messages.create({
      body: smsContent,
      from: "+15735773162",
      to: "+541130410411",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.sendWhatsApp = async (whatsAppContent) => {
  try {
    await twilioClient.messages.create({
      body: whatsAppContent,
      from: "whatsapp:+15735773162",
      to: "whatsapp:+5491130410411",
    });
  } catch (error) {
    console.log(error);
  }
};
