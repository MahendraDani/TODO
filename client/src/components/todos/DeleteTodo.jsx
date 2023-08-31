import axios from "axios";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
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
      <div>
        <AiOutlineDelete
          onClick={deleteTodoById}
          className="text-lg hover:cursor-pointer"
        />
      </div>
    </>
  );
};

export default DeleteTodo;
