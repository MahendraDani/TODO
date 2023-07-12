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

      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="relative w-full h-screen bg-[#EDF6F9]">
        <div className="w-full h-screen flex justify-center items-center">
          <form className="shadow-md shadow-[#BADEDB] bg-[#BADEDB] flex flex-col justify-between items-center gap-6 p-8 rounded-sm text-gray-500 md:text-lg">
            <div>
              <h1 className="w-60 text-center text-2xl font-bold text-gray-800 mb-1">
                LOGIN TO YOUR ACCOUNT
              </h1>
            </div>
            <div className="flex flex-col justify-between items-start gap-1">
              <h3 className="text-gray-600 font-medium">Email</h3>
              <input
                type="email"
                placeholder="jhon@example.com"
                className=" w-[20rem] bg-[#EDF6F9] px-2 py-1 text-gray-800 outline-none border-b-2 border-gray-600 focus:outline-none text-lg  rounded-sm"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-between items-start gap-1">
              <h3 className="text-gray-600 font-medium">Password</h3>
              <input
                type="password"
                placeholder="*******"
                className="w-[20rem] py-1 bg-[#EDF6F9] text-gray-800 outline-none border-b-2 border-gray-600 px-2 focus:outline-none text-lg rounded-sm"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <button
                className="align-center border-2 border-gray-800 px-5 text-lg text-gray-800 rounded-sm hover:bg-gray-800 hover:text-slate-200 ease-in duration-300 font-semibold"
                onClick={handleLogin}
              >
                LOGIN
              </button>
            </div>
            <div className="w-72 flex justify-center items-center -mt-2 text-gray-600">
              <h3>
                Not an user?{" "}
                <Link to={"/signup"} className="text-[#0000ff] hover:underline">
                  Signup here!
                </Link>
              </h3>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 w-full h-16 bg-[#BADEDB] flex items-center justify-center">
        <Link to={"/"}>
          <h1 className="text-3xl font-bold text-gray-800">TODO</h1>
        </Link>
      </div>
    </>
  );
};

export default Login;
