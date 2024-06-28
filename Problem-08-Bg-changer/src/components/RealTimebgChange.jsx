

import React, { useState } from "react";

function RealTimebgChange() {
  // State mei random bg color hai jo main div mein generate karega

  let randombg = "";
  const [bg, setBg] = useState(randombg);

  // Random bg genrate karne ke liye and bg state me dalne ke liye ye code hai
  const handleChangeBg = () => {
    randombg = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBg(randombg);
  };

  // style={{ backgroundColor: bg }} inline style mein bg color state mei pass karega

  // onclick par handleChangeBg() ye function chalega Click event mein change bg color karega

  return (
    <div
      className={`main-div h-screen w-full relative`}
      style={{ backgroundColor: bg }}
    >
      <div
        onClick={handleChangeBg}
        className="absolute top-[80%] left-1/2 bg-zinc-200 px-8 py-2 text-black font-bold rounded-full cursor-pointer"
      >
        Change Bg
      </div>
      <div className="absolute top-[10%] left-1/2 bg-zinc-200 px-8 py-2 text-black font-bold rounded-full cursor-pointer">
        {bg ? bg : "#242424"}
      </div>
    </div>
  );
}

export default RealTimebgChange;

