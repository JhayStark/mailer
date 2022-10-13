import React from "react";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import InboxIcon from "@mui/icons-material/Inbox";
import OutboxIcon from "@mui/icons-material/Outbox";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="border-r-2 border-slate-300 w-40 static h-[100-15vh] ">
      <div className="py-2">
        <Link href="/compose">
          <div className="items-center bg-teal-200 rounded-lg m-3 p-4 shadow-lg font-semibold text-gray-500 hover:bg-teal-400 flex cursor-pointer">
            <HistoryEduIcon className="text-cyan-700 " />
            Compose
          </div>
        </Link>
        <div className="flex flex-col gap-5 text-gray-600 font-medium ">
          <Link href="/inbox">
            <div className="items-center  rounded-md  p-2 shadow-sm hover:bg-slate-200 cursor-pointer">
              <InboxIcon className="text-violet-500" />
              Inbox
            </div>
          </Link>
          <Link href="/outbox">
            <div className="items-center  rounded-md  p-2 shadow-sm hover:bg-slate-200 cursor-pointer  ">
              <OutboxIcon className="text-violet-500" />
              Outbox
            </div>
          </Link>
          <Link href="/starred">
            <div className="items-center  rounded-md  p-2 shadow-sm hover:bg-slate-200 cursor-pointer ">
              <StarIcon className="text-violet-500" />
              Starred
            </div>
          </Link>
          <Link href="/deleted">
            <div className="items-center  rounded-md  p-2 shadow-sm hover:bg-slate-200 cursor-pointer ">
              <AutoDeleteIcon className="text-violet-500" />
              Deleted
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
