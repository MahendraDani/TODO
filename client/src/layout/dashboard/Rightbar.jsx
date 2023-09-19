import React from "react";

const Rightbar = ({ todos }) => {
  return (
    <>
      {todos.length === 0 ? null : (
        <div className="w-64 fixed right-5 top-[4.7rem] bottom-3 bg-slate-50 rounded-md">
          Rightbar
        </div>
      )}
    </>
  );
};

export default Rightbar;
