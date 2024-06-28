import React, { useEffect } from "react";
import { useState } from "react";

function Hindi_Quats() {
  const [Quats, setQuote] = useState("");

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = () => {
    fetch(`https://hindi-quotes.vercel.app/random/success`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data.quote);

        // You can access more details from the 'data' object as needed
      })
      .catch((error) => console.error("Error fetching chapter:", error));
  };
  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="w-[20rem]">{Quats}</h2>
      <button onClick={fetchRandomQuote}>New Quats</button>
    </div>
  );
}

export default Hindi_Quats;
