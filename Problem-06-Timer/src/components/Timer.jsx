import React, { useEffect, useState, useRef } from "react";
import { LuMoonStar } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";

function Timer() {
  const [themss, setThemss] = useState(true);
  const [thems, setThems] = useState(false);
  const [time, setTime] = useState(60);
  const timeoutId = useRef(null);

  useEffect(() => {
    if (time > 0) {
      timeoutId.current = setTimeout(
        () => {
          setTime((prevTime) => prevTime - 1);
        },
        thems ? 100 : 1000
      );
      console.log(timeoutId);
    } else {
      clearTimeout(timeoutId.current);
    }
    return () => clearTimeout(timeoutId.current); // Clear timeout on unmount or time change
  }, [time]);
  const handleSatopTimer = () => {
    timeoutId.current = setTimeout(() => {
      setTime((prevTime) => prevTime - 1);
      console.log(timeoutId.current);
    }, 1000);
  };
  const handleSetTimer = (e) => {
    setTime(Number(e.target.value));
  };
  const handleStopTimer = () => {
    clearTimeout(timeoutId.current);
  };
  return (
    <div
      className={`flex flex-col gap-10 items-center  pt-[10rem]  transition-all duration-300 ease-in-out ${
        themss ? "bg-black" : "bg-white"
      } bg-black h-full w-full`}
    >
      <h2 className={`${themss ? "text-white" : "text-black"}`}>
        Time Left: {time}
      </h2>
      <input
        onChange={handleSetTimer}
        className="px-6 rounded-md outline-none py-2 bg-to-blue-500 bg-from-yellow-400"
        type="number"
        placeholder="Enter Time in Seconds"
        value={time}
      />
      <button onClick={handleSetTimer}>Reset Time</button>
      <div className="flex items-center gap-4">
        <button onClick={handleSatopTimer}>Start Time</button>
        <button onClick={handleStopTimer}>Stop Time</button>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2>Current Time</h2>
        <div className="flex flex-col gap-10 items-center">
          <div
            className={`h-[3rem] w-[18rem] bg-gradient-to-r ${
              thems
                ? "to-blue-500 from-yellow-400 "
                : "from-yellow-400 to-blue-400"
            } transition-all duration-300 ease-in-out rounded-full py-4 px-10 relative`}
          >
            <div
              onClick={() => setThems(!thems)}
              className={`absolute top-0  ${
                thems ? "left-[1%]" : "left-[40%]"
              } flex items-center cursor-pointer w-full h-full transition-all duration-300 ease-in-out rounded-full py-4 px-10`}
            >
              <span className="text-xl ">
                {thems ? "mili second" : "Second"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center">
        <div
          className={`h-5 max-w-20 bg-gradient-to-r ${
            themss
              ? "to-blue-500 from-blue-400 "
              : "from-yellow-400 to-yellow-400"
          } transition-all duration-300 ease-in-out rounded-full py-4 px-10 relative`}
        >
          <div
            className={`absolute top-0  ${
              themss ? "left-[10%]" : "-left-[40%]"
            } flex items-center w-full h-full  transition-all duration-300 ease-in-out rounded-full py-4 px-10`}
          >
            <span
              onClick={() => setThemss(!themss)}
              className="text-2xl cursor-pointer"
            >
              {themss ? <LuMoonStar /> : <MdOutlineWbSunny />}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
