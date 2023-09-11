import React from "react";

const Sidebar = ({
  onButtonClick,
  handleTodoList,
  handleTodoCards,
  handleCompletedTodosList,
  handleNotStartedTodosList,
  handleInProgressTodosList,
}) => {
  return (
    <>
      {/* #83C5BE */}
      <div className="w-64 border-2 border-slate-200 bg-slate-50 fixed top-3 left-3 bottom-3 shadow-md rounded-sm purple text-[#001011] font-medium flex flex-col justify-start items-center">
        {/* {Create todos button} */}
        <p className="text-xl font-bold text-slate-700 my-4">LOGO</p>
        <div>
          <button
            className="border-2 border-black bg-transparent hover:bg-black hover:text-white px-2 py-1 text-center min-w-[8rem] ease-in duration-200 font-normal mb-4"
            onClick={onButtonClick}
          >
            Create Todos
          </button>
        </div>
        <div className="w-full">
          <button
            className="px-2 py-3 focus:bg-purple-300 focus:border-l-[6px] focus:border-purple-600 w-full text-center min-w-[14rem] font-normal bg-slate-50 text-slate-600 hover:bg-slate-300 ease-in-out duration-300 border-slate-100"
            onClick={handleTodoList}
          >
            Todo List
          </button>
        </div>
        <div className="w-full">
          <button
            className="px-2 py-3 focus:bg-purple-300 focus:border-l-[6px] focus:border-purple-600 w-full text-center min-w-[14rem] font-normal bg-slate-50 text-slate-600 hover:bg-slate-300 ease-in-out duration-300 border-slate-100"
            onClick={handleTodoCards}
          >
            Todo Cards
          </button>
        </div>
        <div className="w-full">
          <button
            className="px-2 py-3 focus:bg-purple-300 focus:border-l-[6px] focus:border-purple-600 w-full text-center min-w-[14rem] font-normal bg-slate-50 text-slate-600 hover:bg-slate-300 ease-in-out duration-300 border-slate-100"
            onClick={handleCompletedTodosList}
          >
            Completed List
          </button>
        </div>
        <div className="w-full">
          <button
            className="px-2 py-3 focus:bg-purple-300 focus:border-l-[6px] focus:border-purple-600 w-full text-center min-w-[14rem] font-normal bg-slate-50 text-slate-600 hover:bg-slate-300 ease-in-out duration-300 border-slate-100"
            onClick={handleNotStartedTodosList}
          >
            Not Started List
          </button>
        </div>
        <div className="w-full">
          <button
            className="px-2 py-3 focus:bg-purple-300 focus:border-l-[6px] focus:border-purple-600 w-full text-center min-w-[14rem] font-normal bg-slate-50 text-slate-600 hover:bg-slate-300 ease-in-out duration-300 border-slate-100"
            onClick={handleInProgressTodosList}
          >
            In Progress List
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
