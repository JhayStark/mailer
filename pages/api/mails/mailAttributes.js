import Email from "../../../models/email";
import db from "../../../lib/dbConnect";

export default async function handler(req, res) {
  if ((req.method = "POST")) {
    await db.connect();

    if (req.body.starred) {
      let isStarred;
      req.body.starred === "true" ? (isStarred = true) : (isStarred = false);
      await Email.updateOne(
        { _id: req.body.id },
        { $set: { starred: isStarred } }
      );
    } else if (req.body.deleted) {
      let isDeleted;
      req.body.deleted === "true" ? (isDeleted = true) : (isDeleted = false);
      await Email.updateOne(
        { _id: req.body.id },
        { $set: { deleted: req.body.deleted } }
      );
    }
    await db.disconnect();

    res.status(200).json({ message: "Post attribute added" });
  } else {
    res.status(404).json({ error: "Only Post methods are allowed" });
  }
}
