import axios from "axios";

export const handleStar = async (id, starred) => {
  let value;
  starred ? (value = "true") : (value = "false");
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/mails/mailAttributes`,
    { starred: value, id: id }
  );
};

export const handleDelete = async (id, deleted) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/mails/mailAttributes`,
    { deleted: deleted, id: id }
  );
};
