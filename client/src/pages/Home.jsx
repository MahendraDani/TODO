import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CreateTodos from "./CreateTodos";
import Sidebar from "../components/Sidebar";
import { CiSearch } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";
import { SlLogout } from "react-icons/sl";

const Home = () => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(false);
  useEffect(() => {
    token ? setUser(true) : setUser(false);
  }, []);

  const handleLogout = () => {
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      window.location = "/";
    } else {
      null;
    }
  };

  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div>{!token && <Navbar />}</div>
      {user ? (
        <div className="pl-[18rem] pt-4 w-full min-h-screen px-4 bg-[#EDF6F9]">
          <Sidebar />
          <section className="flex justify-between items-start border-b-2 border-gray-300">
            <div className="flex justify-between items-center">
              <div className="text-xl">
                <CiSearch />
              </div>
              <input
                type="text"
                className="w-96 px-2 py-1 bg-transparent outline-none focus:outline-none text-lg"
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
                  Mahendra Dani
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
          <div className="flex justify-start items-start gap-4 pt-3 py-2">
            <div>
              {/* <h1 className="pr-2 text-xl font-bold text-gray-800">
                CREATE TODO
              </h1> */}
              {/* <div className="py-2">
                <CreateTodos />
              </div> */}
            </div>
            {/* <div className="bg-[#C1DEEB] mt-2">
              <div className="text-center max-w-[17rem]">
                <h2 className="text-lg uppercase font-medium">Title</h2>
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, tempora!
                </h3>
                <h3>Inprogress</h3>
              </div>
            </div> */}
          </div>
          {/* <div>
            <h1 className="pt-2 text-xl font-bold text-gray-800">YOUR TODOS</h1>
          </div> */}
        </div>
      ) : null}
    </>
  );
};

export default Home;
