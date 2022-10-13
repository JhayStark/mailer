import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result.error) {
      setError(result.error);
    } else {
      router.push(router.query.redirect || "/inbox/");
    }
  };

  return (
    <div className=" w-[30%] flex m-auto items-center justify-center mt-[10%]">
      <div className="flex flex-col min-w-fit w-full 00 gap-9 border-2 border-gray-500 rounded-xl ">
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-2xl font-bold font-serif text-blue-300 mt-2">
            RAVEN
          </h2>
          <h4 className="font-medium">Sign In</h4>
          <p className="text-gray-700">to continue to your Mail</p>
        </div>
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="email"
              name="email"
              className="border-2 border-blue-300 m-4 h-12 mb-0 rounded-md p-2"
              value={data.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              className="border-2 border-blue-300 m-4 h-12 mb-0 rounded-md p-2"
              value={data.password}
              onChange={handleChange}
            />
            <p className="mt-0 ml-4 text-sm">Forgot password?</p>
          </div>
          <div className="flex justify-between">
            <Link href="/auth/signup">
              <button className="ml-4 font-medium text-sm text-blue-500 rounded-xl hover:bg-blue-100 h-8 cursor-pointer p-2">
                Create Account
              </button>
            </Link>
            <button
              type="submit"
              className="bg-blue-400 text-white rounded-lg p-2 flex items-center justify-center m-4 w-[20%] hover:bg-blue-600"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
