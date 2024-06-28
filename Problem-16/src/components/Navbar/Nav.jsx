import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
    document.addEventListener("click", handleClickOutside());
    },[isOpen])
   const handleClickOutside = () => {
        return () => setIsOpen(!isOpen)
    }
  // toggle isOpen state when hamburger menu is clicked and close menu when clicked outside of it
  return (
    <div className="bg-red-500 flex items-center relative justify-end px-8 w-full h-12 md:opacity-0" >
      <div
        onClick={handleClickOutside}
        className=" absolute cursor-pointer flex gap-2 transition-all ease-in duration-500 items-center justify-center flex-col "
      >
        {isOpen ? (
          <span className="transition-all ease-in duration-200 text-[2rem] rotate-90">
            <IoMdClose />
          </span>
        ) : (
          <span className="text-[2rem]">
            <RxHamburgerMenu />
          </span>
        )}
      </div>
      <div
        className={`flex gap-3 items-center transition-all ease-in duration-200 justify-center w-1/2 h-screen top-[100%] ${
          isOpen ? "left-0" : "-left-[100%]"
        } bg-black absolute z-50`}
      >
        <ul className="flex gap-3 items-center justify-center flex-col w-full">
          <li className="py-2 px-4 hover:bg-slate-50">Home</li>
          <li className="py-2 px-4 hover:bg-slate-50">Home</li>
          <li className="py-2 px-4 hover:bg-slate-50">Home</li>
          <li className="py-2 px-4 hover:bg-slate-50">Home</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
