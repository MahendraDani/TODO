import React, { useEffect, useState } from "react";
import DashboardButton from "../Buttons/Dashboard.button";
import { MdDone } from "react-icons/md";
import { LiaTasksSolid } from "react-icons/lia";
import { BiLoaderCircle } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { IoAddSharp } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { IoGridOutline } from "react-icons/io5";

const Sidebar = ({
  createTodo,
  handleTodoList,
  handleCompletedTodosList,
  handleNotStartedTodosList,
  handleInProgressTodosList,
  handleShowTodoCards,
  handleCompletedTodosCards,
  handleInProgressTodosCards,
  handleNotStartedTodosCards,
}) => {
  return (
    <>
      {/* #83C5BE */}
      <div className=" w-64 border-2 border-slate-100 bg-slate-50 fixed top-3 left-3 bottom-3 rounded-sm purple text-slate-700 font-medium flex flex-col justify-start items-start gap-8">
        <section className="w-full">
          <div className="text-center">
            <p className="text-2xl font-extrabold text-slate-800 my-4">TODOS</p>
          </div>
        </section>
        <section className="w-full">
          <div>
            <div className="flex justify-start items-center px-6">
              <h1 className="text-lg">Create Todos</h1>
            </div>
            <DashboardButton
              icon={<IoAddSharp />}
              name={"New todo"}
              onClick={createTodo}
            />
          </div>
        </section>

        <section className="w-full">
          <div className="flex justify-between items-center gap-3 px-6 py-2">
            <h1 className="text-lg">Table View</h1>
            <div>
              <BsList className="text-xl" />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-1">
            <DashboardButton
              icon={<LiaTasksSolid />}
              name={"All todos"}
              onClick={handleTodoList}
            />
            <DashboardButton
              icon={<MdDone />}
              name={"Completed"}
              onClick={handleCompletedTodosList}
            />
            <DashboardButton
              icon={<BiLoaderCircle />}
              name={"In progress"}
              onClick={handleInProgressTodosList}
            />
            <DashboardButton
              icon={<RxCross2 />}
              name={"Not started"}
              onClick={handleNotStartedTodosList}
            />
          </div>
        </section>
        <section className="w-full">
          <div className="flex justify-between items-center gap-3 px-6 py-2">
            <h1 className="text-lg">Grid View</h1>
            <div>
              <IoGridOutline className="text-xl" />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-1">
            <DashboardButton
              icon={<LiaTasksSolid />}
              name={"All todos"}
              onClick={handleShowTodoCards}
            />
            <DashboardButton
              icon={<MdDone />}
              name={"Completed"}
              onClick={handleCompletedTodosCards}
            />
            <DashboardButton
              icon={<BiLoaderCircle />}
              name={"In progress"}
              onClick={handleInProgressTodosCards}
            />
            <DashboardButton
              icon={<RxCross2 />}
              name={"Not started"}
              onClick={handleNotStartedTodosCards}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Sidebar;
