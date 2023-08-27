import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CreateTodos from "./CreateTodos";
import Sidebar from "../components/Sidebar";
import Header from "../components/dashboards/Header";
import GetTodo from "./Todos";

const Home = () => {
  const token = localStorage.getItem("token");
  const [userFullName, setUserFullName] = useState("");
  const [user, setUser] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showTodoList, setShowTodoList] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  const closeModal = () => {
    showModal ? setShowModal(false) : null;
  };

  const handleShowTodoList = () => {
    setShowTodoList(!showTodoList);
  };

  useEffect(() => {
    token ? setUser(true) : setUser(false);
    setUserFullName(localStorage.getItem("userFullName"));
  }, []);

  return (
    <>
      <div>{!token && <Navbar />}</div>
      {user ? (
        <div className="pl-[18rem] pt-4 w-full min-h-screen px-4 bg-slate-50">
          <Sidebar onButtonClick={handleModal} />
          <Header fullName={userFullName} />
          <section className="mt-4">
            {showModal && <CreateTodos closeModal={closeModal} />}
          </section>
          <button
            className="px-3 py-1 border-[#2b2d42] border-2 hover:bg-[#2b2d42] ease-in duration-300 hover:text-white"
            onClick={handleShowTodoList}
          >
            Todo list
          </button>
          {showTodoList && <GetTodo />}
        </div>
      ) : null}
    </>
  );
};

export default Home;
