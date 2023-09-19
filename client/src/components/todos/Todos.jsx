import axios from "axios";
import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoCards from "./TodoCards";
import CompletedTodos from "./status/lists/Completed";
import NotStartedTodos from "./status/lists/NotStarted";
import InProgressTodos from "./status/lists/InProgress";
import CompletedCards from "./status/cards/CompletedCards";
import InProgressCards from "./status/cards/InProgressCards";
import NotStartedCards from "./status/cards/NotStartedCards";
import Rightbar from "../../layout/dashboard/Rightbar";

const GetTodo = ({
  showTodoList,
  showTodoCards,
  showCompletedTodosList,
  showNotStartedTodosList,
  showInProgressTodosLists,
  showCompletedTodosCards,
  showInProgressTodosCards,
  showNotStartedTodosCards,
  handleTodoCards,
  handleTodoList,
  handleCompletedTodosCards,
  handleCompletedTodosList,
  handleInProgressTodosCards,
  handleInProgressTodosList,
  handleNotStartedTodosCards,
  handleNotStartedTodosList,
}) => {
  const [todos, setTodos] = useState([]);

  const getTodosOfUser = async () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const headers = {
      "Content-Type": "Appilcation/json",
      authorization: token,
      id: userId,
    };
    const response = await axios.get("http://localhost:3000/users/todos", {
      headers,
    });
    const TODOS = response.data;
    const REVERSE_TODOS = TODOS.reverse();
    setTodos(REVERSE_TODOS);
  };

  useState(getTodosOfUser, []);
  return (
    <div>
      {showTodoCards && (
        <TodoCards todos={todos} handleTodoList={handleTodoList} />
      )}
      {showTodoList && (
        <TodoList todos={todos} handleTodoCards={handleTodoCards} />
      )}
      {showCompletedTodosList && (
        <CompletedTodos
          todos={todos}
          status={"completed"}
          handleCompletedTodosCards={handleCompletedTodosCards}
        />
      )}
      {showNotStartedTodosList && (
        <NotStartedTodos
          todos={todos}
          status={"not started"}
          handleNotStartedTodosCards={handleNotStartedTodosCards}
        />
      )}
      {showInProgressTodosLists && (
        <InProgressTodos
          todos={todos}
          status={"in progress"}
          handleInProgressTodosCards={handleInProgressTodosCards}
        />
      )}
      {showCompletedTodosCards && (
        <CompletedCards
          todos={todos}
          status={"completed"}
          handleCompletedTodosList={handleCompletedTodosList}
        />
      )}
      {showInProgressTodosCards && (
        <InProgressCards
          todos={todos}
          status={"in progress"}
          handleInProgressTodosList={handleInProgressTodosList}
        />
      )}
      {showNotStartedTodosCards && (
        <NotStartedCards
          todos={todos}
          status={"not started"}
          handleNotStartedTodosList={handleNotStartedTodosList}
        />
      )}
      <Rightbar todos={todos} />
    </div>
  );
};

export default GetTodo;
