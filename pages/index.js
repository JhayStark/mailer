import Link from "next/link";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";

export default function Home() {
  return (
    <div>
      <div className="m-auto justify-center items-center w-[60%] mt-11 flex flex-row">
        <div className="m-5">
          <Link href="/auth/login">
            <div className="flex flex-col m-auto items-center justify-center text-green-300 hover:bg-green-50 outline-none rounded-xl cursor-pointer">
              <LoginRoundedIcon sx={{ fontSize: "15rem" }} />
              <h1 className="text-yellow-300 font-medium text-3xl">LOGIN</h1>
            </div>
          </Link>
        </div>
        <div className="m-5">
          <Link href="/auth/signup">
            <div className="flex flex-col m-auto items-center justify-center text-red-300 hover:bg-red-50 outline-none rounded-xl cursor-pointer">
              <PersonAddAltRoundedIcon sx={{ fontSize: "15rem" }} />
              <h1 className="text-orange-300 font-medium text-3xl">SIGN UP</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
