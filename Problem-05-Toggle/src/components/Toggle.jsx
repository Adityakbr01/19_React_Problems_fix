import React, { useState } from "react";
import { LuMoonStar } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";

function Toggle() {
  const [thems, setThems] = useState(false);
  return (
    <div className="flex flex-col gap-10 items-center">
      <div
        className={`h-5 max-w-20 bg-gradient-to-r ${
          thems ? "to-blue-500 from-yellow-400 " : "from-yellow-400 to-blue-400"
        } transition-all duration-300 ease-in-out rounded-full py-4 px-10 relative`}
      >
        <div
          className={`absolute top-0  ${
            thems ? "left-[10%]" : "-left-[40%]"
          } flex items-center w-full h-full  transition-all duration-300 ease-in-out rounded-full py-4 px-10`}
        >
          <span
            onClick={() => setThems(!thems)}
            className="text-2xl cursor-pointer"
          >
            {thems ? <LuMoonStar /> : <MdOutlineWbSunny />}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Toggle;
