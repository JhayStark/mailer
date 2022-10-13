import CheckBox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

const InboxItem = ({
  starred,
  from,
  subject,
  message,
  time,
  id,
  deleted,
  handleStar,
  handleDelete,
}) => {
  return (
    <div className="flex items-center mr-1 cursor-pointer">
      <div className="flex sm:flex-col md:flex-row lg:flex-row">
        <CheckBox />
        <IconButton onClick={() => handleStar(id, !starred)}>
          {starred ? <StarIcon /> : <StarOutlineIcon />}
        </IconButton>
        <IconButton onClick={() => handleDelete(id, !deleted)}>
          <DeleteForeverIcon />
        </IconButton>
      </div>
      <div className="w-full flex justify-between ">
        <p className="font-medium overflow-hidden h-6 w-[20%]">{from}</p>
        <Link href={`/inbox/${id}`}>
          <p className="font-medium  w-[80%] overflow-hidden h-6 ">
            {subject}-<span className="font-normal">{message}</span>
          </p>
        </Link>
        <p className="font-medium px-2">{time}</p>
      </div>
    </div>
  );
};

export default InboxItem;
