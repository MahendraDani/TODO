import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });
      const token = response.data.accessToken;
      const userId = response.data.userId;
      const userFullName = response.data.user.fullName;
      localStorage.setItem("userFullName", userFullName);
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="relative w-full h-screen">
        <div className="w-full h-screen flex justify-center items-center">
          <form className="border-2 border-slate-200 bg-slate-100 flex flex-col justify-between items-center gap-6 p-8 rounded-sm text-gray-500 md:text-lg">
            <div>
              <h1 className="w-60 text-center text-2xl font-bold text-[#2b2d42] mb-1">
                LOGIN TO YOUR ACCOUNT
              </h1>
            </div>
            <div className="flex flex-col justify-between items-start gap-1">
              <h3 className="text-slate-500 font-medium">Email</h3>
              <input
                type="email"
                placeholder="jhon@example.com"
                className=" w-[20rem] bg-slate-200 px-2 py-1 text-[#2b2d42] outline-none border-b-2 border-gray-600 focus:outline-none text-lg  rounded-sm"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-between items-start gap-1">
              <h3 className="text-slate-500 font-medium">Password</h3>
              <input
                type="password"
                placeholder="*******"
                className="w-[20rem] py-1 bg-slate-200 text-[#2b2d42] outline-none border-b-2 border-gray-600 px-2 focus:outline-none text-lg rounded-sm"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <button
                className="align-center border-2 border-[#2b2d42] min-w-[6rem] text-lg text-[#2b2d42] rounded-sm hover:bg-[#2b2d42] hover:text-slate-200 ease-in duration-300 font-semibold"
                onClick={handleLogin}
              >
                LOGIN
              </button>
            </div>
            <div className="w-72 flex justify-center items-center -mt-2 text-gray-600">
              <p className="text-sm">
                Not an user?{" "}
                <Link to={"/signup"} className="text-[#0000ff] hover:underline">
                  Signup here!
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 w-full h-16 bg-slate-100 border-b-2 border-slate-200 flex items-center justify-center">
        <Link to={"/"}>
          <h1 className="text-3xl font-bold text-gray-800">TODO</h1>
        </Link>
      </div>
    </>
  );
};

export default Login;
