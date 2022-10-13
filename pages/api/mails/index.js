import Email from "../../../models/email";
import db from "../../../lib/dbConnect";
import User from "../../../models/user";

export default async function handler(req, res) {
  const userID = req.query.userId || req.body.userId;
  const user = await User.findById(userID);
  const now = new Date();
  const mins = now.getMinutes();
  const hours = now.getHours();
  const time = `${hours}:${mins}`;

  if (req.method === "GET") {
    await db.connect();

    const emails = await Email.find({});
    const inbox = await Email.find({ to: user.email, deleted: false });
    const outbox = await Email.find({ from: user.email, deleted: false });
    const starred = await Email.find({
      to: user.email,
      starred: true,
      deleted: false,
    });
    const deleted = await Email.find({ to: user.email, deleted: true });

    await db.connect();

    res.status(200).json({ emails, inbox, outbox, starred, deleted });
  } else if (req.method === "POST") {
    await db.connect();

    try {
      const { to, subject, message } = req.body;

      const recipientId = to;
      const recipients = recipientId.split(",");

      // for (let i = 0; i <= recipients.length; i++) {
      //   // console.log(recipients[i]);
      //   const recipient = await User.findOne({ email: recipients[i] });
      //   // console.log(recipient);
      //   if (recipient) {
      //     const email = await Email.create({
      //       from: user.email,
      //       to: recipient.email,
      //       subject,
      //       message,
      //       time: time,
      //     });
      //     await recipient.updateOne({ $push: { inbox: email._id } });
      //     await user.updateOne({ $push: { outbox: email._id } });
      //     res.status(201).json({ email });
      //   } else {
      //     res.status(404).json({ message: "recipient not found" });
      //   }
      // }

      const recipient = await User.findOne({ email: recipientId });
      if (recipient) {
        const email = await Email.create({
          from: user.email,
          to,
          subject,
          message,
          time: time,
        });

        await recipient.updateOne({ $push: { inbox: email._id } });
        await user.updateOne({ $push: { outbox: email._id } });
        res.status(201).json({ email });
      } else {
        res.status(404).json({ message: "recipient not found" });
      }
    } catch (error) {
      console.log(`${error}`);
    }

    await db.disconnect();
  } else {
    res.status(404).json({ error: "Only POST and GET methods are allowed" });
  }
}
