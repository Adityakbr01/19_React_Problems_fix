import React, { useState } from "react";

function FilterItems() {
  const [input, setInput] = useState("");
  const Items = ["item 1", "item 2", "item 3", "item 4","item 5"];

  for (let i = Items.length + 1; i <= 80; i++) {
    Items.push(`item ${i}`);
  }

  const filteredItems = Items.filter((item) =>
    input ? item.includes(input.toLowerCase()) : true
  );

  const getMessage = () => {
    if (!input) return "Search Item";
    return filteredItems.length > 0
      ? "Your Filtered Items: " + filteredItems.join(", ")
      : "No Items";
  };

  return (
    <div className="flex flex-col  w-full h-screen gap-6 pt-8">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-2xl">User</h2>
        <div className="flex flex-col gap-2 items-center">
          <input
            onChange={(e) => setInput(e.target.value.toLowerCase())}
            className="px-4 py-2 rounded-lg"
            type="text"
            placeholder="Search items"
          />
        </div>
        <h3 className="text-xl text-orange-500">{getMessage()}</h3>
      </div>
      <div className="flex flex-wrap justify-center max-h-[2rem] w-full gap-4 items-center">
        {/* {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li  className="list-none" key={index}>
              {item}
            </li>
          ))
        ) : (
          <p>No Match</p>
        )} */}
              {
                  filteredItems.length > 0 && (
                      filteredItems.map((item, index) => {
                          
                          return <li className="list-none p-4 border-[#277fea] border" key={index}>{ item}</li>
                      })
                  )
              }
      </div>
    </div>
  );
}

export default FilterItems;
