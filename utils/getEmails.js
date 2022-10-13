import axios from "axios";

export const getEmails = async (id) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mails/`);
  const emails = await res.data.emails;

  if (id) {
    const email = emails.find((email) => email._id === id);
    return email;
  }

  return emails;
};

export const getInbox = async ({ emailId = null, userId }) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mails`, {
    params: { userId },
  });
  const inbox = await res.data.inbox;

  if (emailId) {
    const email = inbox.find((email) => email._id === emailId);
    return email;
  }

  return inbox;
};

export const getOutbox = async ({ emailId = null, userId }) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mails`, {
    params: { userId },
  });
  const outbox = await res.data.outbox;

  if (emailId) {
    const email = outbox.find((email) => email._id === emailId);
    return email;
  }

  return outbox;
};

export const getStarred = async ({ emailId = null, userId }) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mails`, {
    params: { userId },
  });
  const starred = await res.data.starred;

  if (emailId) {
    const email = starred.find((email) => email._id === emailId);
    return email;
  }

  return starred;
};

export const getDeleted = async ({ emailId = null, userId }) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mails`, {
    params: { userId },
  });
  const deleted = await res.data.deleted;

  if (emailId) {
    const email = deleted.find((email) => email._id === emailId);
    return email;
  }

  return deleted;
};
