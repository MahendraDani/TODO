import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";
import { SlLogout } from "react-icons/sl";

const Header = (props) => {
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("userFullName");
      window.location = "/";
    } else {
      null;
    }
  };
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <section className="flex justify-between items-start border-b-2 border-gray-300">
        <div className="flex justify-between items-center">
          <div className="text-xl">
            <CiSearch />
          </div>
          <input
            type="text"
            className="md:w-96 px-2 py-1 bg-transparent outline-none focus:outline-none text-lg"
            placeholder="Search todos here..."
          />
        </div>
        <button
          onClick={() => {
            setDropdown(!dropdown);
          }}
        >
          <div className="flex justify-center items-center gap-2">
            <div className="text-xl">
              <BsPersonCircle />
            </div>
            <p className="text-lg font-medium pr-2 text-gray-800">
              {props.fullName}
            </p>
          </div>
        </button>
        {dropdown && (
          <div className="w-36 absolute top-12 right-4 bg-white shadow-lg rounded-sm">
            <div
              className="flex justify-evenly items-center px-2 py-1 cursor-pointer hover:bg-gray-700 hover:text-white ease-in duration-300"
              onClick={handleLogout}
            >
              <div>
                <SlLogout />
              </div>
              <div className="text-md">Logout</div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Header;
