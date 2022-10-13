import Sidebar from "../../components/Sidebar";
import CheckBox from "@material-ui/core/Checkbox";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import { getDeleted } from "../../utils/getEmails";
import DeletedItem from "../../components/DeletedItem";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

export async function getServerSideProps({ req, res }) {
  const session = await unstable_getServerSession(req, res, authOptions);
  const emails = await getDeleted({ userId: session.user._id });

  // console.log(session);

  return {
    props: {
      emails: emails || [],
    },
  };
}

const Deleted = ({ emails }) => {
  return (
    <div className="flex ">
      <Sidebar />

      <div className="w-[100%] m-2 rounded-md h-[70%] border-gray-300 border-2">
        <div className="flex items-center justify-center bg-slate-200">
          <p className="text-gray-700 p-2">
            Messages that have been in Trash more than 30 days will be
            automatically deleted.
            <span className="text-blue-600 font-medium"> Empty Trash now</span>
          </p>
        </div>
        <div className=" flex border-b border-gray-500 ">
          <CheckBox />
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="items-center overflow-y-auto h-[32rem]">
          {emails.map((email) => (
            <DeletedItem
              to={email.to}
              from={email.from}
              subject={email.subject}
              message={email.message}
              id={email._id}
              time={email.time}
              key={email._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deleted;
