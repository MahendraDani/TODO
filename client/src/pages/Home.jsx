import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CreateTodos from "./CreateTodos";
import Sidebar from "../components/Sidebar";
const Home = () => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    token ? setUser(true) : setUser(false);
  }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>
      {user ? (
        <div className="pt-16 pl-[16rem] w-full min-h-screen px-4 bg-[#EDF6F9]">
          <Sidebar />
          <CreateTodos />
        </div>
      ) : null}
    </>
  );
};

export default Home;
