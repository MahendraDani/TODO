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
      <div className="w-64 border-r-2 border-slate-200 bg-slate-50 fixed top-0 left-0 bottom-0 rounded-sm p-2 purple text-[#001011] font-medium">
        <p>DASHBOARD</p>

        <div className="flex flex-col items-start justify-start gap-4">
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
              className="border-2 border-black bg-transparent hover:bg-black hover:text-white px-2 py-1 text-center min-w-[8rem] ease-in duration-200 font-normal"
              onClick={handleTodoList}
            >
              Todo List
            </button>
          </div>
          <div>
            <button
              className="border-2 border-black bg-transparent hover:bg-black hover:text-white px-2 py-1 text-center min-w-[8rem] ease-in duration-200 font-normal"
              onClick={handleTodoCards}
            >
              Todo Cards
            </button>
          </div>
          <div>
            <button
              className="border-2 border-black bg-transparent hover:bg-black hover:text-white px-2 py-1 text-center min-w-[8rem] ease-in duration-200 font-normal"
              onClick={handleCompletedTodosList}
            >
              Completed Todos
            </button>
          </div>
          <div>
            <button
              className="border-2 border-black bg-transparent hover:bg-black hover:text-white px-2 py-1 text-center min-w-[8rem] ease-in duration-200 font-normal"
              onClick={handleNotStartedTodosList}
            >
              Not Started Todos
            </button>
          </div>
          <div>
            <button
              className="border-2 border-black bg-transparent hover:bg-black hover:text-white px-2 py-1 text-center min-w-[8rem] ease-in duration-200 font-normal"
              onClick={handleInProgressTodosList}
            >
              In Progress Todos
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
