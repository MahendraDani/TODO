import axios from "axios";
import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoCards from "./TodoCards";
import CompletedTodos from "./status/Completed";
import NotStartedTodos from "./status/NotStarted";
import InProgressTodos from "./status/InProgress";
import CompletedCards from "./status/cards/CompletedCards";
import InProgressCards from "./status/cards/InProgressCards";
import NotStartedCards from "./status/cards/NotStartedCards";

const GetTodo = ({
  showTodoList,
  showTodoCards,
  showCompletedTodosList,
  showNotStartedTodosList,
  showInProgressTodosLists,
  showCompletedTodosCards,
  showInProgressTodosCards,
  showNotStartedTodosCards,
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
      {showTodoCards && <TodoCards todos={todos} />}
      {showTodoList && <TodoList todos={todos} />}
      {showCompletedTodosList && (
        <CompletedTodos todos={todos} status={"completed"} />
      )}
      {showNotStartedTodosList && (
        <NotStartedTodos todos={todos} status={"not started"} />
      )}
      {showInProgressTodosLists && (
        <InProgressTodos todos={todos} status={"in progress"} />
      )}
      {showCompletedTodosCards && (
        <CompletedCards todos={todos} status={"completed"} />
      )}
      {showInProgressTodosCards && (
        <InProgressCards todos={todos} status={"in progress"} />
      )}
      {showNotStartedTodosCards && (
        <NotStartedCards todos={todos} status={"not started"} />
      )}
    </div>
  );
};

export default GetTodo;
