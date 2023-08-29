import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";

const TodoCards = ({ todos }) => {
  return (
    <section className="flex flex-row justify-start gap-4 items-start">
      <div className="w-[75rem] flex flex-row flex-wrap justify-start items-start gap-6 mt-4">
        {todos.map((todo, index) => {
          return (
            <section key={index}>
              <div>
                <div className="relative bg-slate-100 border-[1.6px] border-slate-200 hover:bg-slate-200 duration-300 ease-in cursor-default w-[13rem] max-w-[15rem] min-h-[14rem] rounded-sm p-2 px-4">
                  <div className="my-2 flex justify-between items-center gap-4">
                    <span className="text-lg font-bold uppercase">
                      {todo.title}
                    </span>
                  </div>
                  <div className="text-slate-400">{todo.description}</div>
                  <div className="absolute bottom-2 flex justify-between items-center gap-4">
                    <div className="my-2 flex justify-between items-start flex-col ">
                      <div className="text-slate-600">
                        <AiOutlineCalendar />
                      </div>
                      <div className="text-md font-semibold text-slate-400">
                        {todo.createdOn}
                      </div>
                    </div>
                    <div className="my-2 flex justify-between items-start flex-col">
                      <div className="text-slate-600">
                        <BiTimeFive />
                      </div>
                      <div className="text-md font-semibold text-slate-400">
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
    </section>
  );
};

export default TodoCards;
