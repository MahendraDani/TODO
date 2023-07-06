import axios from "axios";
import React, { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState("");
  const [todo, setTodo] = useState({});

  const handleForm = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const headers = {
        authorization: token,
        id: userId,
      };
      const response = await axios.post(
        "http://localhost:3000/todos",
        {
          title,
          description,
          isCompleted,
        },
        { headers }
      );
      const createdTodo = response.data.todo;
      setTodo(createdTodo);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <div className="m-4">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            className="border-2 border-black px-2"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="m-4">
          <label htmlFor="desccription">Description</label>
          <input
            type="text"
            name="desccription"
            className="border-2 border-black px-2"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="m-4">
          <label htmlFor="isCompleted">is Completed?</label>
          <input
            type="text"
            name="isCompleted"
            className="border-2 border-black px-2"
            onChange={(e) => setIsCompleted(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-3 py-1 rounded-full bg-sky-400 hover:bg-sky-600"
            onClick={handleForm}
          >
            Create Todo
          </button>
        </div>
      </div>
      <div className="text-3xl">
        <h1>Your Todos</h1>
        <h1>{todo.title}</h1>
        <h1>{todo.description}</h1>
        <h1>{todo.createdBy}</h1>
        <h1>{todo.createdAt}</h1>
      </div>
    </div>
  );
};

export default CreateTodo;
