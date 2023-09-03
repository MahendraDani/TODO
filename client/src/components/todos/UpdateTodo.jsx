import axios from "axios";
import React, { useState } from "react";

const UpdateTodo = ({ todoId }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [showUpdateTodoModal, setShowUpdateTodoModal] = useState(false);

  const handleCloseUpdateTodoModal = () => {
    setShowUpdateTodoModal(false);
  };

  const handleUpdateTodo = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.put(
        `http://localhost:3000/todos/update/${todoId}`,
        {
          newTitle: newTitle,
          newDescription: newDescription,
        },
        {
          headers: {
            id: localStorage.getItem("userId"),
            authorization: localStorage.getItem("token"),
          },
        }
      );
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button
        onClick={() => {
          setShowUpdateTodoModal(true);
        }}
      >
        Update
      </button>
      {showUpdateTodoModal && (
        <div
          className="w-full h-screen fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
          id="overlay"
          onClick={(e) => {
            const overlay = document.getElementById("overlay");
            if (e.target === overlay) {
              handleCloseUpdateTodoModal();
            }
          }}
        >
          <div className="rounded-sm shadow-sm">
            <div className="flex justify-end p-2 -mb-[2.5rem]">
              <button
                className="text-red-700 rounded-sm hover:bg-red-600 hover:text-white ease-out duration-200"
                onClick={handleCloseUpdateTodoModal}
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
                  DO YOU WANT TO UPDATE TODO?
                </h1>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Title..."
                  className="text-xl w-full bg-transparent focus:outline-none text-slate-800 placeholder:text-slate-400"
                  onChange={(e) => {
                    setNewTitle(e.target.value);
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
                    setNewDescription(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className=" grid place-items-center">
                <button
                  className="border-2 border-gray-800 px-5 text-lg text-gray-800 rounded-sm hover:bg-gray-800 hover:text-slate-200 ease-in duration-300 font-semibold"
                  onClick={handleUpdateTodo}
                >
                  UPDATE
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateTodo;
