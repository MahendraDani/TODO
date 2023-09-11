import React, { useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import UpdateTodo from "../../update/UpdateTodo";
import DeleteTodoWarning from "../../delete/DeleteTodoWarning";

const CompletedCards = ({ todos, status }) => {
  const [showDropbox, setShowDropbox] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState(false);

  const COMPLETED = "completed";
  const IN_PROGRESS = "in progress";
  const NOT_STARTED = "not started";

  return (
    <section className="flex flex-col justify-start gap-1 items-start">
      <h1 className="text-2xl text-slate-700">COMPLETED</h1>
      <div className="w-[75rem] flex flex-row flex-wrap justify-start items-start gap-6 mt-4">
        {todos.map((todo, index) => {
          return todo.status === status ? (
            <section
              key={index}
              className="relative"
              onClick={() => {
                setSelectedTodoId(todo._id);
              }}
            >
              <div>
                <div className="bg-slate-100 border-[1.6px] hover:shadow-lg duration-300 ease-in cursor-default w-[13rem] max-w-[15rem] min-h-[16rem] rounded-sm p-2 px-4 flex flex-col justify-between">
                  <div>
                    <div className="my-2 flex justify-between items-start gap-4">
                      <div className="text-lg font-bold uppercase text-slate-600 flex justify-center items-center gap-2">
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
                        <p>{todo.title}</p>
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          setShowDropbox(!showDropbox);
                        }}
                      >
                        <BiDotsVerticalRounded className="text-lg text-slate-600  w-fit h-fit  rounded-full hover:bg-slate-200 duration-300 ease-in p-1" />
                      </div>
                    </div>
                    {(todo._id === selectedTodoId ? showDropbox : null) && (
                      <aside
                        id="dropbox"
                        className={`${
                          !showDropbox ? "hidden" : null
                        } absolute top-12 right-8 w-fit p-3 rounded-md shadow-md flex flex-col gap-2 bg-slate-300 ease-in`}
                      >
                        <div className="flex justify-around items-center">
                          <UpdateTodo
                            className="cursor-pointer"
                            todos={todos}
                            todoId={selectedTodoId}
                          />
                        </div>
                        <div className="flex justify-around items-center cursor-pointer">
                          <DeleteTodoWarning todoId={selectedTodoId} />
                        </div>
                      </aside>
                    )}
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
          ) : null;
        })}
      </div>
    </section>
  );
};

export default CompletedCards;
