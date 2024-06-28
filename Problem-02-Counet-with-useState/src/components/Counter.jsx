import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  if (count < 0) return <h2>Count is Zero Please Refresh Page</h2>;
  return (
    <div className="flex flex-col gap-10 items-center">
      <h2>Count : {count}</h2>
      <div className="flex gap-4 items-center">
        <button onClick={() => setCount(count + 1)}>Increse</button>
        <button onClick={() => setCount(count - 1)}>Decrage</button>
      </div>
    </div>
  );
}

export default Counter;
