import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DeleteTodo = ({ todoId }) => {
  const navigate = useNavigate();
  const deleteTodoById = async () => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const response = await axios.delete(
      "http://localhost:3000/todos/delete" + `/${todoId}`,
      {
        headers: {
          id: userId,
          authorization: token,
        },
      }
    );
    response ? navigate(0) : null;
  };
  return (
    <>
      <button
        onClick={deleteTodoById}
        className="border-2 border-gray-800 min-w-[5rem] text-lg text-gray-800 rounded-sm hover:bg-gray-800 hover:text-slate-200 ease-in duration-300 font-normal"
      >
        Yes
      </button>
    </>
  );
};

export default DeleteTodo;
