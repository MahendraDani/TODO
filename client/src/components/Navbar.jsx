import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 w-full h-16 bg-[#E2D6EA] flex justify-between items-center px-20 pb-1">
        <div
          onClick={() => {
            window.location = "/";
          }}
        >
          {/* <Link to={"/"}> */}
          <h1 className="text-3xl font-bold text-[#2b2d42] cursor-pointer">
            TO-DO
          </h1>
          {/* </Link> */}
        </div>
        <div>
          {/* Desktop Screens */}
          {
            <div className="hidden md:flex justify-between items-center gap-6">
              <Link to={"/login"}>
                <button className="text-lg font-medium border-[2px] border-[#2b2d42] px-4 pb-1 rounded-full text-[#2b2d42] hover:bg-[#2b2d42] hover:text-white ease-in duration-300">
                  Login
                </button>
              </Link>
              <Link to={"/signup"}>
                <button className="text-lg font-medium border-2 border-[#2b2d42] bg-[#2b2d42] text-white hover:bg-transparent hover:text-[#2b2d42] px-4 pb-1 rounded-full ease-in duration-300">
                  Signup
                </button>
              </Link>
            </div>
          }

          {/* Mobile Screens */}
          {
            <div className="sm:flex md:hidden justify-between items-center gap-8">
              <Link to={"/login"}>
                <button className="text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </button>
              </Link>
              <Link to={"/signup"}>
                <button className="text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgb(31 41 55)"
                    className="w-6 h-6"
                  >
                    <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                  </svg>
                </button>
              </Link>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;
