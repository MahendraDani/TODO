import axios from "axios";
import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoCards from "./TodoCards";
import CompletedTodos from "./status/Completed";
import NotStartedTodos from "./status/NotStarted";
import InProgressTodos from "./status/InProgress";

const GetTodo = ({
  showTodoList,
  showTodoCards,
  showCompletedTodosList,
  showNotStartedTodosList,
  showInProgressTodosLists,
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
    </div>
  );
};

export default GetTodo;
