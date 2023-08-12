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
  useState(getTodosOfUser, []);
  return (
    <div>
      {/* <button
        onClick={getTodosOfUser}
        className="bg-sky-400 px-3 py-1 rounded-full"
      >
        Get todos
      </button> */}
      <div className="flex flex-col justify-between items-start">
        {todos.map((todo, index) => {
          return (
            <>
              <div key={index} className=" bg-green-300">
                <div className="flex gap-2 ">
                  <div>{todo._id}</div>
                  <div>{todo.title}</div>
                  <div>{todo.createdBy}</div>
                  <div>{todo.createdAt}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default GetTodo;
