import React from "react";

const Sidebar = ({ onButtonClick }) => {
  return (
    <>
      {/* #83C5BE */}
      <div className="w-64 bg-[#E2D6EA] fixed top-0 left-0 bottom-0 rounded-sm p-2 purple text-[#001011] font-medium">
        <p>DASHBOARD</p>

        <div>
          <button
            className="border-2 border-black bg-transparent hover:bg-black hover:text-white px-2 py-1 ease-in duration-200 font-normal"
            onClick={onButtonClick}
          >
            Create Todos
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
