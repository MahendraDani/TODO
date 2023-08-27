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
    setTodos(TODOS);
  };
  useState(getTodosOfUser, []);
  return (
    <div>
      {/* <section className="flex flex-row justify-start gap-4 items-start">
        <div className="flex flex-col justify-evenly items-start gap-2 mt-4">
          {todos.map((todo, index) => {
            return (
              <section key={index}>
                <div>
                  <div className="bg-[#E88796] w-[13rem] max-w-[15rem] min-h-[14rem] rounded-sm p-2 px-4">
                    <div className="my-2 flex justify-between items-center gap-4">
                      <span className="text-lg font-bold uppercase">
                        {todo.title}
                      </span>
                    </div>
                    <div>{todo.description}</div>
                    <div className="flex justify-between items-center">
                      <div className="my-2 flex justify-between items-start flex-col">
                        <div className="text-gray-800">Created On</div>
                        <div className="text-md font-semibold">
                          {todo.createdOn}
                        </div>
                      </div>
                      <div className="my-2 flex justify-between items-start flex-col">
                        <div className="text-gray-800">Created At</div>
                        <div className="text-md font-semibold">
                          {todo.createdAt}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </section> */}

      {/* LIST VIEW */}
      <section className="flex flex-col justify-start gap-4 items-start">
        {/* <div className="flex flex-row justify-between items-start gap-4">
          <div>
            {todos.map((todos, index) => {
              return <div key={index}>{index + 1}</div>;
            })}
          </div>
          <div>
            {todos.map((todos, index) => {
              return <div key={index}>{todos.title}</div>;
            })}
          </div>
          <div className=" max-w-[38rem]">
            {todos.map((todos, index) => {
              return <div key={index}>{todos.description}</div>;
            })}
          </div>
          <div>
            {todos.map((todos, index) => {
              return <div key={index}>{todos.createdOn}</div>;
            })}
          </div>
          <div>
            {todos.map((todos, index) => {
              return <div key={index}>{todos.createdAt}</div>;
            })}
          </div>
        </div> */}
        <div className="flex flex-row justify-between items-start p-2 pb-0 gap-2 -mb-4">
          <div>#</div>
          <div className="min-w-[13rem]">Todo</div>
          <div className="max-w-[50rem] min-w-[50rem]">Description</div>
          <div>Created On</div>
        </div>
        <div>
          {todos.map((todos, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-start items-start even:bg-green-500 p-2 gap-2"
              >
                <div>{index + 1}</div>
                <div className="min-w-[13rem] max-w-[13rem]">{todos.title}</div>
                <div className="max-w-[50rem] min-w-[50rem]">
                  {todos.description}
                </div>
                <div>{todos.createdOn}</div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default GetTodo;

{
  /* In Progress */
}
{
  /* <div className="flex flex-col justify-evenly items-start gap-2 mt-4">
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
        </div> */
}
{
  /* Completed */
}
{
  /* <div className="flex flex-col justify-evenly items-start gap-2 mt-4">
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
        </div> */
}
