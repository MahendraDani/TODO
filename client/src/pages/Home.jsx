import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CreateTodos from "./CreateTodos";
import Sidebar from "../components/Sidebar";
import Header from "../components/dashboards/Header";
import GetTodo from "./Get.todo";

const Home = () => {
  const token = localStorage.getItem("token");
  const [userFullName, setUserFullName] = useState("");
  const [user, setUser] = useState(false);

  useEffect(() => {
    token ? setUser(true) : setUser(false);
    setUserFullName(localStorage.getItem("userFullName"));
  }, []);

  return (
    <>
      <div>{!token && <Navbar />}</div>
      {user ? (
        <div className="pl-[18rem] pt-4 w-full min-h-screen px-4 bg-[#EDF6F9]">
          <Sidebar />
          <Header fullName={userFullName} />
          {/* <section className="mt-4">
            <div className="text-lg font-medium">
              <h1>CREATE TODO</h1>
            </div>
            <CreateTodos />
          </section> */}
          <GetTodo />
        </div>
      ) : null}
    </>
  );
};

export default Home;
