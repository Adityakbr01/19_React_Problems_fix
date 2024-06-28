import React, { useEffect, useReducer, useState } from "react";
import { MdAutoDelete } from "react-icons/md";
function RealtimeUserIn() {
  const taskReducer = (state, action) => {
    switch (action.type) {
      case "add_task":
        return [
          ...state,
          { id: Date.now(), text: action.payload, isComplaited: false },
        ];
      case "remove_task":
        return state.filter((task) => task.id !== action.payload);
      case "set_tasks":
        return action.payload;
      case "Toggle":
        return state.map((task) =>
          task.id === action.payload
            ? { ...task, isComplaited: !task.isComplaited }
            : task
        );
      default:
        return state;
    }
  };
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const [task, dispatch] = useReducer(taskReducer, initialTasks);
  const [input, setInput] = useState("");

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    dispatch({ type: "set_tasks", payload: savedTasks });
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  const AddTask = () => {
    if (input.trim() === "") {
      alert("Fill Input");
    } else {
      dispatch({ type: "add_task", payload: input });
      setInput("");
    }
  };

  const removeTask = (id) => {
    dispatch({ type: "remove_task", payload: id });
  };

  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="text-4xl">Todo App</h2>
      <div className="flex gap-4 items-center">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="px-4 py-2 rounded-lg"
          type="text"
          placeholder="Write Something"
        />
        <button onClick={AddTask}>Add Task</button>
      </div>
      <ul className="w-full flex flex-col items-center gap-4">
        {task.map((item) => (
          <li
            key={item.id}
            className="bg-green-700 w-full h-12 py-2 px-4 flex items-center justify-between rounded-md"
          >
            <span
              style={{
                textDecoration: item.isComplaited ? "line-through" : "none",
              }}
              className="cursor-pointer text-xl"
              onClick={() => dispatch({ type: "Toggle", payload: item.id })}
            >
              {item.text}
            </span>

            <span
              onClick={() => removeTask(item.id)}
              className="cursor-pointer text-xl" title="Delet"
            >
              <MdAutoDelete />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RealtimeUserIn;
