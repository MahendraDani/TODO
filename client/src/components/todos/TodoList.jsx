import React, { useEffect, useState } from "react";
import { BiCheckbox, BiSolidCheckboxChecked, BiTask } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdNumbers } from "react-icons/md";
import DeleteTodoWarning from "./delete/DeleteTodoWarning";
import UpdateTodo from "./update/UpdateTodo";
import { IoGridOutline } from "react-icons/io5";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ReactPaginate from "react-paginate";

const TodoList = ({ todos, handleTodoCards }) => {
  const [selectedTodoId, setSelectedTodoId] = useState("");
  const COMPLETED = "completed";
  const NOT_STARTED = "not started";
  const IN_PROGRESS = "in progress";

  const [isChecked, setIsChecked] = useState(false);

  const handleIsChecked = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };

  const [pageNumber, setPageNumber] = useState(0);
  const todosPerPage = 8;
  const pagesVisited = pageNumber * todosPerPage;
  const pageCount = Math.ceil(todos.length / todosPerPage);
  const displayTodos = todos
    .slice(pagesVisited, pagesVisited + todosPerPage)
    .map((todo, index) => {
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
          }  p-2 gap-2 border-slate-50 even:bg-slate-50 hover:bg-slate-200 ease-in duration-200 cursor-default`}
        >
          <div className="min-w-[2.5rem] max-w-[2rem] text-center text-slate-400">
            <label>
              <BiSolidCheckboxChecked
                className={`${
                  isChecked === false ? "hidden" : "text-xl cursor-pointer"
                }`}
                onClick={handleIsChecked}
              />
              <BiCheckbox
                className={`${
                  isChecked === true ? "hidden" : "text-xl cursor-pointer"
                }`}
                onClick={() => {
                  selectedTodoId === todo._id
                    ? setIsChecked(true)
                    : setIsChecked(false);
                }}
              />
            </label>
          </div>
          <div className="max-w-[35rem] min-w-[35rem] ">
            <h2 className="flex justify-start items-center text-slate-600 mb-1 gap-2 ">
              <div>{todo.title}</div>
              <div
                className={`font-normal w-2 h-2 rounded-full text-sm ${
                  todo.status === COMPLETED
                    ? "bg-green-400"
                    : null || todo.status === NOT_STARTED
                    ? "bg-red-400"
                    : null || todo.status === IN_PROGRESS
                    ? "bg-yellow-400"
                    : null
                }`}
              ></div>
            </h2>
            <p className=" text-slate-400 mr-2 text-sm ">{todo.description}</p>
          </div>
          <p className="max-w-[6rem] min-w-[6rem] mr-2 text-slate-400 text-sm">
            {todo.createdOn}
          </p>
          <p className="max-w-[6rem] min-w-[6rem] text-slate-400 text-sm">
            {todo.createdAt}
          </p>

          <div className="grid place-content-center min-w-[2rem] max-w-[2rem] pr-7">
            <UpdateTodo todoId={selectedTodoId} todos={todos} />
          </div>
          <div>
            <div className="text-sm max-w-[2rem] min-w-[2rem]">
              <DeleteTodoWarning todoId={selectedTodoId} />
            </div>
          </div>
        </div>
      );
    });

  const onPageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  // Main component here
  return (
    <div className="px-4">
      <section
        className={`${
          todos.length === 0 ? "hidden" : "flex"
        } flex-col justify-start gap-4 items-start`}
      >
        <div className="w-[57.5rem] flex justify-between items-center">
          <h1 className="text-2xl text-slate-700">MY TODOS</h1>
          <div>
            <IoGridOutline
              className="text-xl text-slate-600 cursor-pointer"
              onClick={handleTodoCards}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center p-2 -mb-4 bg-slate-200 gap-2">
          <div className="min-w-[2rem] text-center">
            <MdNumbers className="ml-2 text-xl text-slate-800" />
          </div>
          <div className="min-w-[35.5rem] pl-2 text-lg font-semibold text-[#2b2d42]">
            <BiTask className="text-xl text-slate-600" />
          </div>
          <div className="max-w-[6rem] min-w-[6rem] text-lg font-semibold text-[#2b2d42] mr-2 ">
            <AiOutlineCalendar className="text-xl text-slate-800" />
          </div>
          <div className="max-w-[6rem] min-w-[6rem] text-lg font-semibold text-[#2b2d42]">
            <BiTimeFive className="text-xl text-slate-800" />
          </div>
          <div className="max-w-[2rem] min-w-[2rem]"></div>
          <div className="max-w-[2rem] min-w-[2rem]"></div>
        </div>
        <div>
          <div>
            <div className="relative">{displayTodos}</div>
            <ReactPaginate
              previousLabel={
                <div>
                  <BsArrowLeft />
                </div>
              }
              nextLabel={
                <div>
                  <BsArrowRight />
                </div>
              }
              pageCount={pageCount}
              onPageChange={onPageChange}
              containerClassName={
                "absolute bottom-5 flex justify-center items-center gap-1"
              }
              activeLinkClassName="bg-slate-300"
              pageLinkClassName="px-3 py-1 bg-slate-100 hover:bg-slate-200 ease-in duration-100"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TodoList;
