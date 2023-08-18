import React from "react";
import CreateTodos from "../pages/CreateTodos";

const Sidebar = ({ onButtonClick }) => {
  return (
    <>
      {/* #83C5BE */}
      <div className="w-64 bg-[#E2D6EA] fixed top-0 left-0 bottom-0 rounded-sm p-2 purple text-[#001011] font-medium">
        <p>DASHBOARD</p>
        <div>
          <button
            onClick={onButtonClick}
            className="px-3 py-1 bg-sky-400 hover:bg-sky-500"
          >
            Cliiick Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
