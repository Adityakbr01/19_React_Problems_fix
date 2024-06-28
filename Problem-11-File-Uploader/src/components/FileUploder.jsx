import React, { useState } from "react";

function FileUploder() {
  const [File, setFile] = useState();

  const HandlefileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div className="flex items-center justify-center flex-col gap-6">
      <input
        className="px-3 py4"
        type="file"
        accept="image/*/"
        onChange={HandlefileChange}
      />

      {/*

    Agar File me kuchh hai to aage badho ( && oprator first value true hota hai tabhi next check karta hai ) img ko object se img me badlne ke liye ({URL.createObjectURL(File)}) ye kiya jata hai
      
      
*/}
      {File && (
        <img className="mt-6 max-h-[10rem]" src={URL.createObjectURL(File)} />
          )}
          
          <h1>{ File && "Upload Succfull"}</h1>
    </div>
  );
}

export default FileUploder;
