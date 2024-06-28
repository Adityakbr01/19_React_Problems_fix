import React from "react";
import React_router from "./components/React_router";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Account from "./components/Pages/Account";

function App() {
  return (
    <div className="w-full h-screen">
      <React_router />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Contact" element={<Contact/>} />
        <Route exact path="/Account" element={<Account/>} />
      </Routes>
    </div>
  );
}

export default App;
