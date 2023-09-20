import React from "react";

const DashboardButton = ({ icon, name, onClick }) => {
  return (
    <div className="w-full">
      <button
        className={` w-full flex justify-start items-center gap-4 text-left pl-4 hover:bg-slate-200 duration-200 ease-in py-2 border-l-4 border-slate-50 hover:border-slate-800`}
        onClick={onClick}
      >
        <div>{icon}</div>
        <div>
          <div className="flex justify-start items-center gap-1">
            <p>{name}</p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default DashboardButton;
