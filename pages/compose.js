import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Compose = () => {
  const [data, setData] = useState({
    to: "",
    subject: "",
    message: "",
  });
  const { data: session, status } = useSession();

  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/mails`,
        { ...data, userId: session?.user?._id }
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex ">
      <Sidebar />
      <div className="m-2 w-full rounded-xl border-2">
        <div className=" items-center font-medium bg-violet-100 rounded-t-xl p-3">
          New Message
        </div>
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <input
            type="text"
            name="to"
            id="to"
            value={data.to}
            onChange={handleChange}
            placeholder="To"
            className="border-b border-gray-300 w-full outline-none p-2"
          />
          <input
            type="text"
            name="subject"
            id="subject"
            value={data.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="border-b border-gray-300 w-full outline-none p-2"
          />
          <textarea
            type="text"
            name="message"
            id="message"
            value={data.message}
            onChange={handleChange}
            className="w-full h-[55vh] p-3 outline-none"
          ></textarea>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-200 w-16 m-3 rounded-lg justify-center px-4 py-2 font-semibold cursor-pointer  hover:bg-blue-400 flex"
            >
              Send
            </button>
            <IconButton>
              <DeleteIcon className="text-gray-700 m-3 cursor-pointer" />
            </IconButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Compose;
