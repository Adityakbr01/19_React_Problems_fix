import React from "react";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdExposurePlus1 } from "react-icons/md";
import { TbExposureMinus1 } from "react-icons/tb";

function RealtimeUserIn() {
  const [input, setInput] = useState("");
  const [setTodo, setSetTodo] = useState([]);
  console.log(setTodo);

  const addTodo = () => {
    if (input.trim() !== " ") {
      setSetTodo([...setTodo, input]);
      setInput();
    }
  };
  const deleteHandler = (index) => {
    const newtodo = setTodo.filter((_, i) => i !== index);
    setSetTodo(newtodo);
  };
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="text-3xl">Todo List</h2>
      <div className="flex gap-4 items-center">
        <input
          onChange={(e) => setInput(e.target.value)}
          className="px-4 py-2 rounded-lg hover:border-[#565efc]"
          type="text"
          placeholder="Write Somthing"
        />
        <span
          onClick={addTodo}
          className="text-xl cursor-pointer text-black p-2 rounded-full bg-green-400"
        >
          <MdExposurePlus1 />
        </span>
        {/* <span onClick={() => setShow(!show)}>
          {show ? <FaEye size={26} /> : <FaEyeSlash size={26} />}
        </span> */}
      </div>
      <div className="flex w-full gap-4 items-center">
        <ul className="flex w-full flex-col  justify-center gap-3">
          {setTodo.map((todo, index) => {
            return (
              <div className="flex gap-2 items-center w-full h-full px-3">
                <li
                  key={index}
                  className="w-full bg-amber-500 rounded-md py-3 px-2"
                >
                  {todo}
                </li>
                <span
                  key={Math.random()}
                  onClick={() => deleteHandler(index)}
                  className="p-3 flex items-center justify-center cursor-pointer bg-green-500 rounded-full"
                >
                  <TbExposureMinus1 />
                </span>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default RealtimeUserIn;
