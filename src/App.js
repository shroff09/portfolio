import React from "react";
import Home from "./component/Home.jsx";
import Navbar from "./component/Navbar.jsx";
import Subscribe from "./component/Subscribe.jsx";

export default function App() {
  return (
    <div>
    <Navbar/>
      <Home/>
      <Subscribe/>
    </div>
  );
}
