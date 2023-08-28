import React from "react";

const TodoList = ({ todos }) => {
  return (
    <section className="flex flex-col justify-start gap-4 items-start">
      <div className="flex flex-row justify-between items-center p-2 -mb-4 bg-slate-200 gap-2">
        <div className="min-w-[2rem] text-center">#</div>
        <div className="min-w-[12.2rem] text-lg font-semibold text-[#2b2d42]">
          Todo
        </div>
        <div className="text-lg font-semibold max-w-[47rem] min-w-[47rem] text-[#2b2d42]">
          Description
        </div>
        <div className="max-w-[6rem] min-w-[6rem] text-lg font-semibold text-[#2b2d42]">
          Date
        </div>
        <div className="max-w-[6rem] min-w-[6rem] text-lg font-semibold text-[#2b2d42]">
          Time
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
              <div className="min-w-[2rem] max-w-[2rem] text-center">
                {index + 1}.
              </div>
              <div className="min-w-[12rem] max-w-[12rem]">{todos.title}</div>
              <div className="max-w-[47rem] min-w-[47rem]">
                {todos.description}
              </div>
              <div className="max-w-[6rem] min-w-[6rem]">{todos.createdOn}</div>
              <div className="max-w-[6rem] min-w-[6rem]">{todos.createdAt}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TodoList;
