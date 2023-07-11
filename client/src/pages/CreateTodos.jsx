import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTodos = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const handleModal = () => {
    setModal(!modal);
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState("");

  const handleCreateTodo = async (e) => {
    try {
      e.preventDefault();
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!token) {
        alert("Please login to your account to create todos!");
        navigate("/users/login");
      }
      const response = await axios.post(
        "http://localhost:3000/todos",
        {
          title,
          description,
          isCompleted,
        },
        {
          headers: {
            Authorization: token,
            id: userId,
          },
        }
      );

      console.log(response);
      setModal(!modal);
      alert("Todo created successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        className="px-2 bg-sky-400 rounded-sm hover:bg-sky-500"
        onClick={handleModal}
      >
        Create todos
      </button>

      {modal ? (
        <div className="w-full h-screen absolute inset-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center">
          <div className="rounded-sm shadow-sm">
            <div className="flex justify-end p-2 -mb-[2.5rem]">
              <button
                className="text-red-700 rounded-sm hover:bg-red-600 hover:text-white ease-out duration-200"
                onClick={() => {
                  setModal(!modal);
                }}
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
            <form className=" w-96 bg-white shadow-md flex flex-col justify-between items-center gap-6 p-8 rounded-sm text-gray-500 md:text-lg">
              <div>
                <h1 className="text-2xl font-bold text-purple-700">
                  What's your next Todo?
                </h1>
              </div>
              <div className="flex flex-col justify-between items-start gap-1">
                <h3 className="font-medium">Title</h3>
                <input
                  type="text"
                  placeholder="Workout"
                  className="w-72 text-gray-700 outline-none border-b-2 border-purple-400 focus:border-purple-500 focus:outline-none text-lg rounded-sm"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col justify-between items-start gap-1">
                <h3 className="font-medium">Description</h3>
                <input
                  type="text"
                  placeholder="Go to Gym"
                  className="w-72 text-gray-700 outline-none border-b-2 border-purple-400 focus:border-purple-500 focus:outline-none text-lg rounded-sm"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="flex flex-col justify-between items-start gap-1">
                <h3 className="font-medium">Is Completed?</h3>
                <input
                  type="text"
                  placeholder="False"
                  className="w-72 text-gray-700 outline-none border-b-2 border-purple-400 focus:border-purple-500 focus:outline-none text-lg rounded-sm"
                  onChange={(e) => setIsCompleted(e.target.value)}
                />
              </div>
              <div>
                <button
                  className="border-2 border-purple-700 px-5 text-lg text-purple-700 rounded-sm hover:bg-purple-700 hover:text-slate-200 ease-in duration-300 font-semibold"
                  onClick={handleCreateTodo}
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CreateTodos;
