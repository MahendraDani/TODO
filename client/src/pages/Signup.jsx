import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSingup = async (e) => {
    try {
      e.preventDefault();
      if (password !== confirmPassword) {
        alert("Confirm Password and Create Password should be same!");
      } else {
        const response = await axios.post(
          "http://localhost:3000/users/signup",
          {
            firstName,
            lastName,
            email,
            password: confirmPassword,
          }
        );

        const token = response.data.accessToken;
        const userFullName = response.data.fullName;
        const userId = response.data.userId;
        localStorage.setItem("userFullName", userFullName);
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="relative w-full h-screen flex justify-center items-center">
        <div className="absolute top-0 left-0 right-0 w-full h-16 bg-slate-100 border-b-2 border-slate-200 flex items-center justify-center">
          <Link to={"/"}>
            <h1 className="text-3xl font-bold text-gray-800">TODO</h1>
          </Link>
        </div>
        <form className="bg-slate-100 border-2 border-slate-200 flex flex-col justify-between items-center gap-6 p-4 rounded-sm text-gray-500 md:text-lg">
          <div>
            <h1 className="mb-2 text-2xl font-bold text-gray-800 mt-6">
              CREATE YOUR ACCOUNT
            </h1>
          </div>
          <div className="w-full flex justify-between items-center gap-8">
            <div className="flex flex-col justify-between items-start gap-1">
              <h3 className="text-slate-500 font-medium">First Name</h3>
              <input
                type="text"
                placeholder="Jhon"
                className="bg-slate-200 text-[#2b2d42] outline-none border-b-2 py-1 border-gray-600 focus:outline-none text-lg rounded-sm px-2"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-between items-start gap-1">
              <h3 className="text-slate-500 font-medium">Last Name</h3>
              <input
                type="text"
                placeholder="Doe"
                className="bg-slate-200 text-[#2b2d42]  outline-none border-b-2 py-1 border-gray-600 focus:outline-none text-lg rounded-sm px-2"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full flex-grow flex flex-col justify-between items-start gap-1">
            <h3 className="text-gray-600 font-medium">Email Address</h3>
            <input
              type="email"
              placeholder="jhon@example.com"
              className="w-full bg-slate-200 text-[#2b2d42]  outline-none border-b-2 py-1 text-lg border-gray-600 focus:outline-nonetext-lg rounded-sm px-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-between items-center gap-6">
            <div className="flex flex-col justify-between items-start gap-1">
              <h3 className="text-gray-600 font-medium">Password</h3>
              <input
                type="password"
                placeholder="********"
                className="bg-slate-200 text-[#2b2d42]  outline-none border-b-2 py-1 border-gray-600  focus:outline-none text-lg rounded-sm px-2"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-between items-start gap-1">
              <h3 className="text-gray-600 font-medium">Confirm Password</h3>
              <input
                type="password"
                placeholder="********"
                className="bg-slate-200 text-[#2b2d42]  outline-none border-b-2 py-1 border-gray-600 focus:border-[#593640]0 focus:outline-none text-lg rounded-sm px-2"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              className="border-2 border-[#2b2d42] px-5 text-lg text-[#2b2d42] rounded-sm hover:bg-[#2b2d42] hover:text-slate-200 ease-in duration-300 font-semibold mt-4"
              onClick={handleSingup}
            >
              SIGNUP
            </button>
          </div>

          <div className="-mt-2 mb-6">
            <p className="text-gray-600 text-sm">
              Already a user?{" "}
              <Link to={"/login"} className="text-[#0000ff] hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
