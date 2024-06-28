import React from "react";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function RealtimeUserIn() {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-10 items-center">
      <h2>User Input : {input} </h2>
      <div className="flex gap-4 items-center">
        <input
          onChange={(e) => setInput(e.target.value)}
          className="px-4 py-2 rounded-lg"
          type="text"
          placeholder="Write Somthing"
        />
        <input
          className="px-4 py-2 rounded-lg"
          type={`${show ? "text" : "password"}`}
          placeholder="Password"
        />
        <span onClick={() => setShow(!show)}>
          {show ? <FaEye size={26} /> : <FaEyeSlash size={26} />}
        </span>
      </div>
    </div>
  );
}

export default RealtimeUserIn;
