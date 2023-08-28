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
  const [showTodoList, setShowTodoList] = useState(true);
  const [showTodoCards, setShowTodoCards] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  const closeModal = () => {
    showModal ? setShowModal(false) : null;
  };
  const closeTodoList = () => {
    showTodoList ? setShowTodoList(false) : null;
  };
  const closeTodoCards = () => {
    showTodoCards ? setShowTodoCards(false) : null;
  };

  const handleShowTodoList = () => {
    setShowTodoList(!showTodoList);
    closeTodoCards();
  };

  const handleShowTodoCards = () => {
    setShowTodoCards(!showTodoCards);
    closeTodoList();
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
          <Sidebar
            onButtonClick={handleModal}
            handleTodoList={handleShowTodoList}
            handleTodoCards={handleShowTodoCards}
          />
          <Header fullName={userFullName} />
          <section className="mt-4">
            {showModal && <CreateTodos closeModal={closeModal} />}
          </section>
          <GetTodo showTodoList={showTodoList} showTodoCards={showTodoCards} />
        </div>
      ) : null}
    </>
  );
};

export default Home;
