import React, { useReducer } from "react";

function Teventy() {
  const min = (state) => {
    if (state.count > 0) {
      return { count: state.count - 1 };
      }
    else {
       return {count:0}
      }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        return { count: state.count + 1 };
      case "dec":
        return min(state) ;
      case "res":
        return { count: (state.count = 0) };
    }
  };

  const count = { count: 0 };

  const [state, dispatch] = useReducer(reducer, count);
  return (
    <div className="flex items-center justify-center flex-col">
      <h2>Counter : {state.count}</h2>
      <div className="flex items-center gap-6 mt-6">
        <button onClick={() => dispatch({ type: "inc" })}>+1</button>
        <button onClick={() => dispatch({ type: "dec" })}>-1</button>
        <button onClick={() => dispatch({ type: "res" })}>REset</button>
      </div>
    </div>
  );
}

export default Teventy;
