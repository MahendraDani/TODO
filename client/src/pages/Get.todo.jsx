import axios from "axios";
import React, { useState } from "react";

const GetTodo = () => {
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
    console.log(TODOS);
    setTodos(TODOS);
  };
  return (
    <div>
      <div>See todos here</div>
      <button
        onClick={getTodosOfUser}
        className="bg-sky-400 px-3 py-1 rounded-full"
      >
        Get todos
      </button>
      <div>
        {todos.map((todo, index) => {
          return (
            <div key={index} className="bg-gray-700 text-white m-4">
              <h1>{todo.title}</h1>
              <p>{todo.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetTodo;
