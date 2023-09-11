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
      <div className="w-64 border-r-2 border-slate-200 bg-slate-50 fixed top-0 left-0 bottom-0 rounded-sm p-2 purple text-[#001011] font-medium flex flex-col justify-start gap-4 items-center">
        {/* {Create todos button} */}
        <p className="text-xl font-bold text-slate-700">LOGO</p>
        <div>
          <button
            className="border-2 border-black bg-transparent hover:bg-black hover:text-white px-2 py-1 text-center min-w-[8rem] ease-in duration-200 font-normal"
            onClick={onButtonClick}
          >
            Create Todos
          </button>
        </div>
        <div>
          <button
            className="px-2 py-1 text-center min-w-[14rem] font-normal bg-slate-200 rounded-[2rem] text-slate-600 hover:bg-slate-300 ease-in-out duration-300"
            onClick={handleTodoList}
          >
            Todo List
          </button>
        </div>
        <div>
          <button
            className="px-2 py-1 text-center min-w-[14rem] font-normal bg-slate-200 rounded-[2rem] text-slate-600 hover:bg-slate-300 ease-in-out duration-300"
            onClick={handleTodoCards}
          >
            Todo Cards
          </button>
        </div>
        <div>
          <button
            className="px-2 py-1 text-center min-w-[14rem] font-normal bg-slate-200 rounded-[2rem] text-slate-600 hover:bg-slate-300 ease-in-out duration-300"
            onClick={handleCompletedTodosList}
          >
            Completed List
          </button>
        </div>
        <div>
          <button
            className="px-2 py-1 text-center min-w-[14rem] font-normal bg-slate-200 rounded-[2rem] text-slate-600 hover:bg-slate-300 ease-in-out duration-300"
            onClick={handleNotStartedTodosList}
          >
            Not Started List
          </button>
        </div>
        <div>
          <button
            className="px-2 py-1 text-center min-w-[14rem] font-normal bg-slate-200 rounded-[2rem] text-slate-600 hover:bg-slate-300 ease-in-out duration-300"
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
