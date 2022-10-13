// import React, { useState } from "react";
// import Image from "next/image";
// import mail1 from "./assests/mail1.jpg";
// import axios from "axios";
// import { useRouter } from "next/router";

// const Signup = () => {
//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     dateOfBirth: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const {
//       firstName,
//       lastName,
//       email,
//       password,
//       confirmPassword,
//       dateOfBirth,
//     } = data;
//     if (
//       firstName == "" &&
//       lastName == "" &&
//       email == "" &&
//       password == "" &&
//       confirmPassword == "" &&
//       dateOfBirth == ""
//     ) {
//       setError("Please provide all the information");
//       return;
//     }
//     if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
//       setError("Please enter a valid email");
//     }
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//     }

//     try {
//       const res = await axios.post(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
//         data
//       );
//       router.push("/api/auth/signin");
//     } catch (error) {
//       setError(error.message);
//     }
//   };
//   return (
//     <div>
//       <div className=" w-[60%] flex m-auto items-center justify-center mt-[7%] border-2 border-gray-500 rounded-xl p-4 ">
//         <form onSubmit={handleSubmit}>
//           {error && <p>{error}</p>}
//           <div className="flex flex-row gap-6 ">
//             <div className="flex flex-col gap-4 justify-start items-start">
//               <h2 className="font-bold text-xl text-blue-300">RAVEN</h2>
//               <h3 className="font-semibold text-2xl text-gray-700">
//                 Create your Raven Account
//               </h3>
//               <h3 className=" font-medium text-gray-700">
//                 to continue to your Mail
//               </h3>
//               <div className="flex sm:flex-col md:flex-row lg:flex-row gap-2">
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   name="firstName"
//                   id="firstName"
//                   value={data.firstName}
//                   onChange={handleChange}
//                   className="outline-none border-2 border-gray-400 rounded-lg p-1"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   name="lastName"
//                   id="lastName"
//                   value={data.lastName}
//                   onChange={handleChange}
//                   className="outline-none border-2 border-gray-400 rounded-lg p-1"
//                 />
//               </div>
//               <input
//                 type="date"
//                 name="dateOfBirth"
//                 id="dateOfBirth"
//                 value={data.dateOfBirth}
//                 onChange={handleChange}
//                 className="outline-none border-2 border-gray-400 rounded-lg p-1"
//               />
//               <input
//                 type="text"
//                 name="email"
//                 placeholder="email"
//                 id="email"
//                 value={data.email}
//                 onChange={handleChange}
//                 className="outline-none border-2 border-gray-400 rounded-lg p-1"
//               />

//               <div className="flex  sm:flex-col md:flex-row lg:flex-row gap-2">
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   placeholder="password"
//                   value={data.password}
//                   onChange={handleChange}
//                   className="outline-none border-2 border-gray-400 rounded-lg p-1"
//                 />
//                 <input
//                   type="password"
//                   placeholder="confirm password"
//                   name="confirmPassword"
//                   value={data.confirmPassword}
//                   onChange={handleChange}
//                   className="outline-none border-2 border-gray-400 rounded-lg p-1"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="border-2 rounded-lg p-2 bg-blue-300 hover:bg-blue-500 outline-none justify-center m-auto"
//               >
//                 Sign Up
//               </button>
//             </div>
//             <div className="m-auto justify-center">
//               <Image src={mail1} width={600} height={600} alt="mail icon" />
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
