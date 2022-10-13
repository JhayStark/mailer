import Sidebar from "../../components/Sidebar";
import CheckBox from "@material-ui/core/Checkbox";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import StarredItem from "../../components/StarredItem";
import { getStarred } from "../../utils/getEmails";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

export async function getServerSideProps({ req, res }) {
  const session = await unstable_getServerSession(req, res, authOptions);
  const emails = await getStarred({ userId: session.user._id });

  // console.log(session);

  return {
    props: {
      emails: emails || [],
    },
  };
}

const Starred = ({ emails }) => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-[100%] m-2 rounded-md h-[70%] border-gray-300 border-2">
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
            <StarredItem
              starred={email.starred}
              from={email.from}
              subject={email.subject}
              message={email.message}
              time={email.time}
              key={email._id}
              id={email._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Starred;
