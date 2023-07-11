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
      <div className="relative w-full h-screen bg-slate-100">
        <div className="w-full h-screen flex justify-center items-center">
          <form className="bg-white shadow-md shadow-purple-200 flex flex-col justify-between items-center gap-6 p-8 rounded-sm text-gray-500 md:text-lg">
            <div>
              <h1 className="text-2xl font-bold text-purple-700">
                LOGIN TO YOUR ACCOUNT
              </h1>
            </div>
            <div className="flex flex-col justify-between items-start gap-1">
              <h3 className="font-medium">Email</h3>
              <input
                type="email"
                placeholder="jhon@example.com"
                className="text-gray-700 outline-none border-2 border-purple-400 focus:border-purple-500 focus:outline-none px-2 text-lg rounded-sm"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-between items-start gap-1">
              <h3 className="font-medium">Password</h3>
              <input
                type="password"
                placeholder="*******"
                className="text-gray-700 outline-none border-2 border-purple-400 focus:border-purple-500 focus:outline-none px-2 text-lg rounded-sm"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                className="border-2 border-purple-700 px-5 text-lg text-purple-700 rounded-sm hover:bg-purple-700 hover:text-slate-200 ease-in duration-300 font-semibold"
                onClick={handleLogin}
              >
                LOGIN
              </button>
            </div>
            <div>
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
      <div className="absolute top-0 left-0 right-0 w-full h-16 bg-slate-200 flex items-center justify-center">
        <Link to={"/"}>
          <h1 className="text-3xl font-bold text-purple-700">TODO</h1>
        </Link>
      </div>
    </>
  );
};

export default Login;
