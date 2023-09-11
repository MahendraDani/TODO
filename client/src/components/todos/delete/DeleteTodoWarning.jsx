import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import DeleteTodo from "./DeleteTodo";

const DeleteTodoWarning = ({ todoId }) => {
  const [showDeleteWarning, setShowDeletWarning] = useState(false);
  return (
    <>
      <div>
        <AiOutlineDelete
          className="text-lg cursor-pointer"
          onClick={() => {
            setShowDeletWarning(true);
          }}
        />
      </div>
      {showDeleteWarning && (
        <div className="w-full h-screen fixed z-20 inset-0 bg-[rgba(0,0,0,0.7)] grid place-content-center">
          <section className="w-[23rem] h-[14rem] bg-slate-300 rounded-sm flex flex-col justify-between items-center py-4 px-4">
            <h1 className="text-xl text-center space-y-1">
              Do you want to <span className="text-red-600">delete</span> this
              todo permanently?
            </h1>
            <p className="text-center font-normal text-slate-500">
              This is a one way road. Once delted, todo can't be restored back!
            </p>
            <div className="flex justify-between items-center gap-4">
              <div>
                <DeleteTodo
                  todoId={todoId}
                  onClick={() => {
                    setShowDeletWarning(false);
                  }}
                />
              </div>
              <div>
                <button
                  className="border-2 border-gray-800 min-w-[5rem] text-lg text-gray-800 rounded-sm hover:bg-gray-800 hover:text-slate-200 ease-in duration-300 font-normal"
                  onClick={() => {
                    setShowDeletWarning(false);
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default DeleteTodoWarning;
