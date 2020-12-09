import React from "react";
import Home from "./component/Home.jsx";
import Navbar from "./component/Navbar.jsx"
import "./style.css";

export default function App() {
  return (
    <div>
    <Navbar/>
      <Home/>
    </div>
  );
}
