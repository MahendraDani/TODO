import React, { useState } from "react";
import { BiCheckbox, BiSolidCheckboxChecked, BiTask } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdNumbers } from "react-icons/md";
import DeleteTodoWarning from "../../delete/DeleteTodoWarning";
import UpdateTodo from "../../update/UpdateTodo";
import CreateTodos from "../../create/CreateTodos";
import { IoGridOutline } from "react-icons/io5";
import ReactPaginate from "react-paginate";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const CompletedTodos = ({ todos, status, handleCompletedTodosCards }) => {
  const [selectedTodoId, setSelectedTodoId] = useState("");
  const COMPLETED = "completed";
  const NOT_STARTED = "not started";
  const IN_PROGRESS = "in progress";

  const completedTodos = todos.filter((todo) => {
    if (todo.status === COMPLETED) {
      return todo;
    }
  });
  const [showCreateTodoModal, setShowCreateTodoModal] = useState(false);

  const handleShowCreateTodoModal = () => {
    setShowCreateTodoModal(true);
  };

  const closeModal = () => {
    showCreateTodoModal ? setShowCreateTodoModal(false) : null;
  };

  const [pageNumber, setPageNumber] = useState(0);
  const todosPerPage = 8;
  const pagesVisited = pageNumber * todosPerPage;
  const pageCount = Math.ceil(completedTodos.length / todosPerPage);

  const [isTodoChecked, setIsTodoChecked] = useState(false);

  const [checkedTodos, setCheckedTodos] = useState({});

  const toggleTodoChecked = (todoId) => {
    setCheckedTodos((prevCheckedTodos) => ({
      ...prevCheckedTodos,
      [todoId]: !prevCheckedTodos[todoId],
    }));
  };

  const displayTodos = completedTodos
    .slice(pagesVisited, pagesVisited + todosPerPage)
    .map((todo, index) => {
      const isTodoChecked = checkedTodos[todo._id] || false;
      return todo.status === status ? (
        <div
          key={index}
          onClick={() => {
            setSelectedTodoId(todo._id);
          }}
          className={`flex flex-row justify-start items-center ${
            index == 0
              ? `border-t-[1.6px] border-b-[1.6px] hover:border-t-[1.6px] hover:border-slate-50`
              : `border-b-[1.6px]`
          }  p-2 gap-2 border-slate-50 hover:bg-slate-200 ease-in duration-200 cursor-default even:bg-slate-50`}
        >
          <div className="min-w-[2.5rem] text-center text-slate-400 grid place-content-center">
            <label
              className="cursor-pointer"
              onClick={() => {
                toggleTodoChecked(todo._id);
              }}
            >
              {!isTodoChecked ? (
                <BiCheckbox
                  className="text-xl"
                  onClick={() => {
                    setIsTodoChecked(!isTodoChecked);
                  }}
                />
              ) : (
                <BiSolidCheckboxChecked
                  className="text-xl"
                  onClick={() => {
                    setIsTodoChecked(!isTodoChecked);
                  }}
                />
              )}
            </label>
          </div>
          <div className="max-w-[35rem] min-w-[35rem] ">
            <h2 className="flex justify-start items-center text-slate-600 mb-1 gap-2 ">
              <div className={`${isTodoChecked ? "line-through" : ""}`}>
                {todo.title}
              </div>
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
            <p
              className={`${
                isTodoChecked ? "line-through" : ""
              } text-slate-400 mr-2 text-sm`}
            >
              {todo.description}
            </p>
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
      ) : null;
    });

  const onPageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  // Main component
  return completedTodos.length === 0 ? (
    <div className="h-[80vh] grid place-content-center">
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className="text-center">
          <h2 className="text-2xl text-slate-700">
            Looks like you don't have any{" "}
            <span className="text-green-400">completed</span> todos!
          </h2>
          <h2 className="text-2xl text-slate-700">Create new todo?</h2>
        </div>
        <div className=" grid place-items-center">
          <button
            className="border-2 border-gray-800 px-5 text-md text-gray-800 rounded-sm hover:bg-gray-800 hover:text-slate-200 ease-in duration-300 font-normal"
            onClick={handleShowCreateTodoModal}
          >
            Create Todos
          </button>
        </div>
        <div>
          {showCreateTodoModal && <CreateTodos closeModal={closeModal} />}
        </div>
      </div>
    </div>
  ) : (
    <div className="px-4">
      <section
        className={`${
          completedTodos.length == 0 ? "hidden" : "flex"
        } flex-col justify-start gap-4 items-start`}
      >
        <div className="w-[57.5rem] flex justify-between items-center">
          <h1 className="text-2xl text-slate-700">COMPLETED TODOS</h1>
          <div>
            <IoGridOutline
              className="text-xl text-slate-600 cursor-pointer"
              onClick={handleCompletedTodosCards}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center p-2 -mb-4 bg-slate-200 gap-2">
          <div className="min-w-[2rem] text-center">
            <MdNumbers className="ml-2 text-xl text-slate-600" />
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
      </section>
    </div>
  );
};

export default CompletedTodos;
