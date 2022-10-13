import Email from "../../../models/email";
import db from "../../../lib/dbConnect";
import User from "../../../models/user";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await db.connect();

    const emails = await Email.find({});

    await db.connect();

    res.status(200).json({ emails });
    return;
  } else if (req.method === "POST") {
    await db.connect();

    const fromUser = "634147ced6b76f815b36eeac";
    const sender = await User.findById(fromUser);

    const { to, subject, message } = req.body;

    const email = await Email.create({
      to,
      subject,
      message,
    });

    const sendEmailToClients = async () => {
      try {
        if (email) {
          const recipientId = "6341567d4e8ebce1a8403ff5";
          const recipient = await User.findById(recipientId);

          await recipient.updateOne({ $push: { inbox: email._id } });
          await sender.updateOne({ $push: { outbox: email._id } });
        }
      } catch (error) {
        console.log(`${error}`);
      }
    };

    sendEmailToClients();

    await db.disconnect();

    res.status(201).json({ email });
  } else {
    res.status(404).json({ error: "Only POST and GET methods are allowed" });
  }
}
