import React from "react";
import Sidebar from "../../components/Sidebar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ReplyIcon from "@mui/icons-material/Reply";
import PrintIcon from "@mui/icons-material/Print";
import IconButton from "@material-ui/core/IconButton";
import { getOutbox } from "../../utils/getEmails";
import Link from "next/link";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  const email = await getOutbox({
    emailId: context.params.emailId,
    userId: session.user._id,
  });

  return {
    props: {
      email,
    },
  };
}

const EmailDetails = ({ email }) => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-[100%] m-2 rounded-md h-[70%] border-gray-300 border-2">
        <div className=" flex border-b border-gray-500 justify-between ">
          <div>
            <IconButton>
              <Link href={"/outbox/"}>
                <ArrowBackIcon />
              </Link>
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
            <IconButton>
              <MarkAsUnreadIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <div className="flex">
            <IconButton>
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton>
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </div>
        <div className="items-center overflow-y-auto h-[32rem] ">
          <div className="flex justify-between">
            <div className="p-3">{email.subject}</div>

            <IconButton>
              <PrintIcon />
            </IconButton>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <AccountBoxIcon className="text-5xl text-blue-500" />
              <div className="flex flex-col">
                <p className="font-semibold">{email.to}</p>
                <p className="text-xs">from {email.from}</p>
              </div>
            </div>
            <div className="flex flex-row">
              <p className="p-3">{email.time}</p>
              <IconButton>
                <StarOutlineIcon />
              </IconButton>
              <IconButton>
                <ReplyIcon />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
          <div className="bg-slate-100 m-3 h-[80%] rounded-xl ">
            <p className="m-3">{email.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailDetails;
