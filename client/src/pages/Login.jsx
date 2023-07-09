import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = async () => {
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });
      const token = response.data.accessToken;
      const userId = response.data.userId;
      console.log(token);
      localStorage.setItem("token", token);
      const userIdExists = localStorage.getItem("userId");
      if (!userIdExists) {
        localStorage.setItem(localStorage.setItem("userId", userId));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };
  // return (
  //   <div>
  //     <div>
  //       <div className="m-4">
  //         <label htmlFor="email">Eamil</label>
  //         <input
  //           type="text"
  //           name="email"
  //           className="border-2 border-black px-2"
  //           onChange={(e) => setEmail(e.target.value)}
  //         />
  //       </div>
  //       <div className="m-4">
  //         <label htmlFor="password">Password</label>
  //         <input
  //           type="text"
  //           name="password"
  //           className="border-2 border-black px-2"
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //       </div>
  //       <div>
  //         <button
  //           type="submit"
  //           className="px-3 py-1 rounded-full bg-sky-400 hover:bg-sky-600"
  //           onClick={handleForm}
  //         >
  //           Login
  //         </button>
  //       </div>
  //     </div>

  //     <br />
  //     <button
  //       type="submit"
  //       className="px-3 py-1 rounded-full bg-sky-400 hover:bg-sky-600"
  //       onClick={logout}
  //     >
  //       Logout
  //     </button>
  //   </div>
  // );
  return (
    <>
      <div className="relative w-full h-screen flex justify-center items-center">
        <div className="absolute top-0 left-0 right-0 w-full h-16 bg-slate-200 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-purple-800">TODO</h1>
        </div>
        <form className="bg-slate-100 border-4 border-purple-200 flex flex-col justify-between items-center gap-6 p-4 rounded-sm text-purple-800 md:text-lg">
          <div>
            <h1 className="text-2xl font-bold">CREATE YOUR ACCOUNT</h1>
          </div>
          <div className="w-full flex justify-between items-center gap-8">
            <div className="flex flex-col justify-between items-start gap-1">
              <h3 className=" font-medium">First Name</h3>
              <input
                type="text"
                placeholder="Jhon"
                className="outline-none focus:outline-2 focus:outline-purple-600 px-2 text-lg"
              />
            </div>
            <div className="flex flex-col justify-between items-start gap-1">
              <h3 className=" font-medium">Last Name</h3>
              <input
                type="text"
                placeholder="Doe"
                className="outline-none focus:outline-2 focus:outline-purple-600 px-2 text-lg"
              />
            </div>
          </div>

          <div className="w-full flex-grow flex flex-col justify-between items-start gap-1">
            <h3 className=" font-medium">Email Address</h3>
            <input
              type="email"
              placeholder="jhon@example.com"
              className="w-full outline-none focus:outline-2 focus:outline-purple-600 px-2 text-lg"
            />
          </div>
          <div className="w-full flex justify-between items-center gap-6">
            <div className="flex flex-col justify-between items-start gap-1">
              <h3 className=" font-medium">Password</h3>
              <input
                type="password"
                placeholder="********"
                className="outline-none focus:outline-2 focus:outline-purple-600 px-2 text-lg"
              />
            </div>
            <div className="flex flex-col justify-between items-start gap-1">
              <h3 className=" font-medium">Confirm Password</h3>
              <input
                type="password"
                placeholder="********"
                className="outline-none focus:outline-2 focus:outline-purple-600 px-2 text-lg"
              />
            </div>
          </div>
          <div>
            <button className="border-2 border-purple-700 px-5 text-lg rounded-sm hover:bg-purple-700 hover:text-slate-200 ease-out duration-300 font-semibold">
              SIGNUP
            </button>
          </div>

          <div>
            <h3>
              Already a user? <Link>Login here</Link>
            </h3>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
