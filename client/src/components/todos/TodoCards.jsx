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
                <div className="bg-slate-100 border-[1.6px] border-slate-300 hover:bg-slate-300 duration-300 ease-in cursor-default w-[13rem] max-w-[15rem] min-h-[16rem] rounded-sm p-2 px-4 flex flex-col justify-between">
                  <div>
                    <div className="my-2 flex justify-between items-center gap-4">
                      <span className="text-lg font-bold uppercase text-slate-600">
                        {todo.title}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">{todo.description}</p>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <div className="my-2 flex justify-between items-start flex-col gap-1">
                      <div className="text-slate-600 ">
                        <AiOutlineCalendar />
                      </div>
                      <p className="text-sm text-slate-400">{todo.createdOn}</p>
                    </div>
                    <div className="my-2 flex justify-between items-start flex-col gap-1">
                      <div className="text-slate-600">
                        <BiTimeFive />
                      </div>
                      <p className="text-sm  text-slate-400">
                        {todo.createdAt}
                      </p>
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
