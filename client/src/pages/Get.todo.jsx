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
    <div className="">
      {/* <button
        onClick={getTodosOfUser}
        className="bg-sky-400 px-3 py-1 rounded-full"
      >
        Get todos
      </button> */}
      <section className="flex flex-row justify-start gap-4 items-start">
        {/* Not Started */}
        <div className="flex flex-col justify-evenly items-start gap-2 mt-4">
          {todos.map((todo, index) => {
            return (
              <>
                <div key={index}>
                  <div className="bg-[#E88796] w-[13rem] max-w-[15rem] min-h-[14rem] rounded-sm p-2 px-4">
                    <div className="flex justify-between items-center gap-4">
                      <span className="text-lg font-bold uppercase">
                        {todo.title}
                      </span>
                    </div>
                    <div>{todo.description}</div>
                    <div>{todo.createdOn}</div>
                    <div>{todo.createdAt}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {/* In Progress */}
        <div className="flex flex-col justify-evenly items-start gap-2 mt-4">
          {todos.map((todo, index) => {
            return (
              <>
                <div key={index}>
                  <div className="bg-[#FDE587] w-[13rem] max-w-[15rem] min-h-[14rem] rounded-sm p-2 px-4">
                    <div className="flex justify-between items-center gap-4">
                      <span className="text-lg font-bold uppercase">
                        {todo.title}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {/* Completed */}
        <div className="flex flex-col justify-evenly items-start gap-2 mt-4">
          {todos.map((todo, index) => {
            return (
              <>
                <div key={index}>
                  <div className="bg-[#8FCCC0] w-[13rem] max-w-[15rem] min-h-[14rem] rounded-sm p-2 px-4">
                    <div className="flex justify-between items-center gap-4">
                      <span className="text-lg font-bold uppercase">
                        {todo.title}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default GetTodo;
