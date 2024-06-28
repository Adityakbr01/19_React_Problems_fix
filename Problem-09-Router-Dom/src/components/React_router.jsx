import React from "react";
import { NavLink } from "react-router-dom";

function React_router() {
  return (
    <div className="h-screen w-full relative">
      <div className="w-full flex fixed top-0 left-0 items-center justify-between h-14 px-6 py-4 bg-slate-500">
        <div className="left">Logo</div>
        <div className="right">
          <ul className="flex items-center gap-3 text-white">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/About"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/Contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/Account"}>Account</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default React_router;
