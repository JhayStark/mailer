import CheckBox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

const StarredItem = ({ starred, from, time, subject, message, id }) => {
  return (
    <div className="flex items-center mr-1 border-b border-gray-400 cursor-pointer">
      <CheckBox />
      <IconButton>
        <StarIcon />
      </IconButton>
      <IconButton>
        <DeleteForeverIcon />
      </IconButton>
      <div className="w-full flex justify-between ">
        <p className="font-medium overflow-hidden h-6 w-[20%]">{from}</p>
        <Link href={`/inbox/${id}`}>
          <p className="font-medium w-[80%] overflow-hidden h-6">
            {subject}-<span className="font-normal">{message}</span>
          </p>
        </Link>
        <p className="font-medium px-2">{time}</p>
      </div>
    </div>
  );
};

export default StarredItem;
