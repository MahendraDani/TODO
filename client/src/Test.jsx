import React, { useState } from "react";
import { BiCheckbox, BiSolidCheckboxChecked } from "react-icons/bi";

const Test = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleIsChecked = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };
  return (
    <>
      <div className="w-full h-screen grid place-content-center">
        <div className="flex items-center justify-start gap-2">
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
              onClick={handleIsChecked}
            />
          </label>
          <input type="text" className="border-2 border-s-slate-200" />
        </div>
      </div>
    </>
  );
};

export default Test;
