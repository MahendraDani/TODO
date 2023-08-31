import axios from "axios";
import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoCards from "./TodoCards";

const GetTodo = ({ showTodoList, showTodoCards }) => {
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
    setTodos(TODOS);
  };
  useState(getTodosOfUser, []);
  return (
    <div>
      {showTodoCards && <TodoCards todos={todos} />}
      {showTodoList && <TodoList todos={todos} />}
    </div>
  );
};

export default GetTodo;
