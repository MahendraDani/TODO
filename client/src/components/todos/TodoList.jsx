import React, { useState } from "react";
import { BiTask } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdNumbers } from "react-icons/md";
import DeleteTodo from "./deleteTodo";

const TodoList = ({ todos }) => {
  const [selectedTodoId, setSelectedTodoId] = useState("");
  return (
    <section
      className={`${
        todos.length === 0 ? "hidden" : "flex"
      } flex-col justify-start gap-4 items-start`}
    >
      <div className="flex flex-row justify-between items-center p-2 -mb-4 bg-slate-200 gap-2">
        <div className="min-w-[2rem] text-center">
          <MdNumbers className="ml-2 text-xl text-slate-600" />
        </div>
        <div className="min-w-[37.5rem] pl-2 text-lg font-semibold text-[#2b2d42]">
          <BiTask className="text-xl text-slate-600" />
        </div>
        <div className="max-w-[6rem] min-w-[6rem] text-lg font-semibold text-[#2b2d42] mr-2 grid place-content-evenly">
          <AiOutlineCalendar className="text-xl text-slate-800" />
        </div>
        <div className="max-w-[6rem] min-w-[6rem] text-lg font-semibold text-[#2b2d42]">
          <BiTimeFive className="text-xl text-slate-800" />
        </div>
      </div>
      <div>
        {todos.map((todo, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setSelectedTodoId(todo._id);
              }}
              className={`flex flex-row justify-start items-center ${
                index == 0
                  ? `border-t-[1.6px] border-b-[1.6px] hover:border-t-[1.6px] hover:border-slate-50`
                  : `border-b-[1.6px]`
              }  p-2 gap-2 border-slate-50 hover:bg-slate-200 ease-in duration-200 cursor-default odd:bg-slate-50`}
            >
              <div className="min-w-[2.5rem] max-w-[2rem] text-center text-slate-400">
                {index + 1}
              </div>
              <div className="max-w-[37rem] min-w-[37rem] ">
                <h2 className="flex justify-between items-center text-slate-600 mb-1 ">
                  <div className="hover:text-sky-400 hover:cursor-pointer">
                    {todo.title}
                  </div>
                  <div className="text-sm mr-8">
                    <DeleteTodo todoId={selectedTodoId} />
                  </div>
                </h2>
                <p className=" text-slate-400 mr-2 text-sm">
                  {todo.description}
                </p>
              </div>
              <p className="max-w-[6rem] min-w-[6rem] mr-2 text-slate-400 text-sm">
                {todo.createdOn}
              </p>
              <p className="max-w-[6rem] min-w-[6rem] text-slate-400 text-sm">
                {todo.createdAt}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TodoList;
