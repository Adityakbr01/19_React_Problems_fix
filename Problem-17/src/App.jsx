import React from "react";
import Nineety from "./components/Nineety";
import NinnetyCompo from "./components/NinnetyCompo";
// import { ThemeProvider } from "./Themecontext";
function App() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      {/* <ThemeProvider> */}
        <div>
          <Nineety />
          <NinnetyCompo />
        </div>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
