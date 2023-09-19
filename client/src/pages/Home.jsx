import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import CreateTodos from "../components/todos/create/CreateTodos";
import Sidebar from "../layout/dashboard/Sidebar";
import Header from "../layout/dashboard/Header";
import GetTodo from "../components/todos/Todos";

const Home = () => {
  const token = localStorage.getItem("token");
  const [userFullName, setUserFullName] = useState("");
  const [user, setUser] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showTodoList, setShowTodoList] = useState(true);
  const [showTodoCards, setShowTodoCards] = useState(false);
  const [showCompletedTodosList, setShowCompletedTodosList] = useState(false);
  const [showNotStartedTodosList, setShowNotStartedTodosList] = useState(false);
  const [showInProgressTodosList, setShowInProgressTodosList] = useState(false);
  const [showCompletedTodosCards, setShowCompletedTodosCards] = useState(false);
  const [showInProgressTodosCards, setShowInProgressTodosCards] =
    useState(false);

  const [showNotStartedTodosCards, setShowNotStartedTodosCards] =
    useState(false);

  const closeModal = () => {
    showModal ? setShowModal(false) : null;
  };
  const closeTodoList = () => {
    showTodoList ? setShowTodoList(false) : null;
  };
  const closeTodoCards = () => {
    showTodoCards ? setShowTodoCards(false) : null;
  };

  const closeCompletedTodosList = () => {
    showCompletedTodosList ? setShowCompletedTodosList(false) : null;
  };

  const closeNotStartedTodosList = () => {
    showNotStartedTodosList ? setShowNotStartedTodosList(false) : null;
  };
  const closeInProgressTodosList = () => {
    showInProgressTodosList ? setShowInProgressTodosList(false) : null;
  };
  const closeCompletedTodosCards = () => {
    showCompletedTodosCards ? setShowCompletedTodosCards(false) : null;
  };
  const closeInProgressTodosCards = () => {
    showInProgressTodosCards ? setShowInProgressTodosCards(false) : null;
  };
  const closeNotStartedTodosCards = () => {
    showNotStartedTodosCards ? setShowNotStartedTodosCards(false) : null;
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleShowTodoList = () => {
    setShowTodoList(true);
    closeTodoCards();
    closeCompletedTodosList();
    closeInProgressTodosList();
    closeNotStartedTodosList();
    closeCompletedTodosCards();
    closeInProgressTodosCards();
    closeNotStartedTodosCards();
  };

  const handleShowTodoCards = () => {
    setShowTodoCards(true);
    closeTodoList();
    closeCompletedTodosList();
    closeInProgressTodosList();
    closeNotStartedTodosList();
    closeCompletedTodosCards();
    closeInProgressTodosCards();
    closeNotStartedTodosCards();
  };

  const handleCompletedTodosList = () => {
    setShowCompletedTodosList(true);
    closeTodoList();
    closeTodoCards();
    closeInProgressTodosList();
    closeNotStartedTodosList();
    closeCompletedTodosCards();
    closeInProgressTodosCards();
    closeNotStartedTodosCards();
  };

  const handleNotStartedTodosList = () => {
    setShowNotStartedTodosList(true);
    closeTodoList();
    closeTodoCards();
    closeInProgressTodosList();
    closeCompletedTodosList();
    closeCompletedTodosCards();
    closeInProgressTodosCards();
    closeNotStartedTodosCards();
  };
  const handleInProgressTodosList = () => {
    setShowInProgressTodosList(true);
    closeTodoList();
    closeTodoCards();
    closeNotStartedTodosList();
    closeCompletedTodosList();
    closeCompletedTodosCards();
    closeInProgressTodosCards();
    closeNotStartedTodosCards();
  };

  const handleCompletedTodosCards = () => {
    setShowCompletedTodosCards(true);
    closeTodoList();
    closeTodoCards();
    closeCompletedTodosList();
    closeInProgressTodosList();
    closeNotStartedTodosList();
    closeInProgressTodosCards();
    closeNotStartedTodosCards();
  };

  const handleInProgressTodosCards = () => {
    setShowInProgressTodosCards(true);
    closeTodoList();
    closeTodoCards();
    closeCompletedTodosList();
    closeInProgressTodosList();
    closeNotStartedTodosList();
    closeCompletedTodosCards();
    closeNotStartedTodosCards();
  };

  const handleNotStartedTodosCards = () => {
    setShowNotStartedTodosCards(true);
    closeTodoList();
    closeTodoCards();
    closeCompletedTodosList();
    closeInProgressTodosList();
    closeNotStartedTodosList();
    closeCompletedTodosCards();
    closeInProgressTodosCards();
  };

  useEffect(() => {
    token ? setUser(true) : setUser(false);
    setUserFullName(localStorage.getItem("userFullName"));
  }, []);

  return (
    <>
      <div>{!token && <Navbar />}</div>
      {user ? (
        <div className="pl-[18rem] pt-4 w-full min-h-screen px-4">
          <Sidebar
            createTodo={handleModal}
            handleTodoList={handleShowTodoList}
            handleCompletedTodosList={handleCompletedTodosList}
            handleNotStartedTodosList={handleNotStartedTodosList}
            handleInProgressTodosList={handleInProgressTodosList}
            handleShowTodoCards={handleShowTodoCards}
            handleCompletedTodosCards={handleCompletedTodosCards}
            handleInProgressTodosCards={handleInProgressTodosCards}
            handleNotStartedTodosCards={handleNotStartedTodosCards}
          />
          <Header fullName={userFullName} />
          <section className="mt-4">
            {showModal && <CreateTodos closeModal={closeModal} />}
          </section>
          <GetTodo
            showTodoList={showTodoList}
            showTodoCards={showTodoCards}
            showCompletedTodosList={showCompletedTodosList}
            showNotStartedTodosList={showNotStartedTodosList}
            showInProgressTodosLists={showInProgressTodosList}
            showCompletedTodosCards={showCompletedTodosCards}
            showInProgressTodosCards={showInProgressTodosCards}
            showNotStartedTodosCards={showNotStartedTodosCards}
            handleTodoCards={handleShowTodoCards}
            handleTodoList={handleShowTodoList}
            handleCompletedTodosCards={handleCompletedTodosCards}
            handleCompletedTodosList={handleCompletedTodosList}
            handleInProgressTodosCards={handleInProgressTodosCards}
            handleInProgressTodosList={handleInProgressTodosList}
            handleNotStartedTodosCards={handleNotStartedTodosCards}
            handleNotStartedTodosList={handleNotStartedTodosList}
          />
        </div>
      ) : null}
    </>
  );
};

export default Home;
