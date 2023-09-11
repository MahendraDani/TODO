import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTodos = ({ closeModal }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleCreateTodo = async (e) => {
    try {
      e.preventDefault();
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!token) {
        alert("Please login to your account to create todos!");
        navigate("/users/login");
      }

      if (title === "" || description === "") {
        alert("All fields are required!");
        window.location = "/";
      } else {
        const response = await axios.post(
          "http://localhost:3000/todos",
          {
            title,
            description,
            status,
          },
          {
            headers: {
              Authorization: token,
              id: userId,
            },
          }
        );
        window.location = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {
        <div
          className="w-full h-screen fixed z-20 inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
          id="overlay"
          onClick={(e) => {
            const overlay = document.getElementById("overlay");
            if (e.target === overlay) {
              closeModal();
            }
          }}
        >
          <div className="rounded-sm shadow-sm">
            <div className="flex justify-end p-2 -mb-[2.5rem]">
              <button
                className="text-red-700 rounded-sm hover:bg-red-600 hover:text-white ease-out duration-200"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <form className="w-[30rem] bg-slate-300 shadow-md flex flex-col justify-between gap-6 p-8 rounded-sm text-gray-500 md:text-lg">
              <div>
                <h1 className="text-center text-2xl font-bold text-slate-800">
                  WHAT'S YOUR NEXT TODO?
                </h1>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Title..."
                  className="text-xl w-full bg-transparent focus:outline-none text-slate-800 placeholder:text-slate-400"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div>
                <textarea
                  cols={25}
                  rows={5}
                  placeholder="Todo description..."
                  className="w-full resize-none bg-transparent focus:outline-none text-slate-800 placeholder:text-slate-400"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></textarea>
              </div>
              <div>
                <select
                  name="status"
                  onClick={(e) => {
                    setStatus(e.target.value);
                  }}
                  className="p-1 bg-slate-200 text-sm rounded-sm focus:outline-none "
                >
                  <option
                    value="completed"
                    className="hover:bg-slate-400 hover:text-slate-100 ease-in duration-200 "
                  >
                    Completed
                  </option>
                  <option value="in progress">In progress</option>
                  <option value="not started">Not started</option>
                </select>
              </div>
              <div className=" grid place-items-center">
                <button
                  className="border-2 border-gray-800 px-5 text-lg text-gray-800 rounded-sm hover:bg-gray-800 hover:text-slate-200 ease-in duration-300 font-semibold"
                  onClick={handleCreateTodo}
                >
                  CREATE
                </button>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  );
};

export default CreateTodos;
