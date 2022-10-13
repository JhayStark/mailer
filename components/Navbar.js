import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const user = session?.user?.email;
  return (
    <div className="border-b border-b-gray-400 shadow-md  min-w-screen ">
      <nav className=" flex justify-between py-2 max-w-7xl mx-auto px-4 ">
        <div className="flex items-center text-lg gap-2">
          <Link href="/inbox">
            <MailOutlineIcon className="text-gray-700" />
          </Link>
          <span className="text-gray-500 font-semibold">Raven</span>
        </div>
        {user ? (
          <div className="rounded-lg w-[60%] border-gray-400 bg-violet-100 sm:w-[35%] md:w-[40%] lg:[60%]  ">
            <SearchIcon className="text-violet-500" />
            <input
              type="text"
              placeholder="Search Mail"
              className="outline-0 bg-transparent w-[80%]"
            />
          </div>
        ) : (
          ""
        )}

        <div className="flex gap-3 cursor-pointer">
          <span className="font-serif font-semibold text-gray-700">{user}</span>
          {user ? (
            <Link href="/profile">
              <AccountCircleIcon className="text-violet-500 " />
            </Link>
          ) : (
            ""
          )}
          {user ? (
            <LogoutIcon
              className="text-violet-500 "
              onClick={() => signOut({ callbackUrl: "/auth/login" })}
            />
          ) : (
            ""
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
