import React from "react";
import DashboardButton from "../Buttons/Dashboard.button";
import { MdDone } from "react-icons/md";
import { LiaTasksSolid } from "react-icons/lia";
import { BiLoaderCircle } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
const Sidebar = ({
  createTodo,
  handleTodoList,
  handleCompletedTodosList,
  handleNotStartedTodosList,
  handleInProgressTodosList,
}) => {
  return (
    <>
      {/* #83C5BE */}
      <div className="w-64 border-2 border-slate-200 bg-slate-50 fixed top-3 left-3 bottom-3 shadow-md rounded-sm purple text-slate-700 font-medium flex flex-col justify-start items-center">
        {/* {Create todos button} */}
        <p className="text-2xl font-bold text-slate-800 my-4">TODOS</p>
        <div>
          <button
            className="border-2 border-black bg-transparent hover:bg-black hover:text-white px-2 py-1 text-center min-w-[8rem] ease-in duration-200 font-normal mb-4"
            onClick={createTodo}
          >
            Create Todos
          </button>
        </div>
        <div className="w-full flex justify-start items-center px-6 py-2">
          <h1 className="text-lg">My Todos</h1>
        </div>
        <div className="w-full flex flex-col justify-between gap-1">
          <DashboardButton
            icon={<LiaTasksSolid />}
            name={"All todos"}
            onClick={handleTodoList}
          />
          <DashboardButton
            icon={<MdDone />}
            name={"Completed todos"}
            onClick={handleCompletedTodosList}
          />
          <DashboardButton
            icon={<BiLoaderCircle />}
            name={"In progress todos"}
            onClick={handleInProgressTodosList}
          />
          <DashboardButton
            icon={<RxCross2 />}
            name={"Not started todos"}
            onClick={handleNotStartedTodosList}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
