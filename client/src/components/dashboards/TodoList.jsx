import React from "react";
import { BiTask } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdNumbers } from "react-icons/md";

const TodoList = ({ todos }) => {
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
        <div className="min-w-[47.5rem] pl-2 text-lg font-semibold text-[#2b2d42]">
          <BiTask className="text-xl text-slate-600" />
        </div>
        <div className="max-w-[6rem] min-w-[6rem] text-lg font-semibold text-[#2b2d42] mr-2">
          <AiOutlineCalendar className="text-xl text-slate-800" />
        </div>
        <div className="max-w-[6rem] min-w-[6rem] text-lg font-semibold text-[#2b2d42]">
          <BiTimeFive className="text-xl text-slate-800" />
        </div>
      </div>
      <div>
        {todos.map((todos, index) => {
          return (
            <div
              key={index}
              className={`flex flex-row justify-start items-center ${
                index == 0
                  ? `border-t-[1.6px] border-b-[1.6px] hover:border-t-[1.6px] hover:border-slate-100`
                  : `border-b-[1.6px]`
              }  p-2 gap-2 border-slate-200 hover:bg-slate-200 ease-in duration-200 cursor-default`}
            >
              <div className="min-w-[2.5rem] max-w-[2rem] text-center text-slate-400">
                {index + 1}
              </div>
              <div className="max-w-[47rem] min-w-[47rem] ">
                <div className="text-slate-600 font-extrabold text-lg">
                  {todos.title}
                </div>
                <div className=" text-slate-400">{todos.description}</div>
              </div>
              <div className="max-w-[6rem] min-w-[6rem] mr-2 text-slate-400">
                {todos.createdOn}
              </div>
              <div className="max-w-[6rem] min-w-[6rem] text-slate-400">
                {todos.createdAt}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TodoList;
