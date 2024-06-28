import React, { useContext } from "react";
import { UseTheme } from "../ThemeContext";

function Nineety() {
  const { isDarkmode, toggleDarkMode } = UseTheme();
  // console.log(is);
  return (
    <div>
      <input type="checkbox" name="" id="" checked={isDarkmode} />
      Dark Mode
    </div>
  );
}

export default Nineety;
