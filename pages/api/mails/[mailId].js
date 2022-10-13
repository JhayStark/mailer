import db from "../../../lib/dbConnect";
import Email from "../../../models/email";

export async function handler(req, res) {
  if (req.method === "GET") {
    const { mailId } = req.query.id;
    await db.connect();

    const email = await Email.findById(mailId);
    db.disconnect();

    if (!email) {
      res.status(404).json({ message: "Email not found" });
      return;
    }

    res.status(200).json({ email });
  }
}
