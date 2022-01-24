import React from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";
import logo from "../logo.svg";

const SideBar = () => {
  return(
    <ul className="container-sidebar">
      <li><Link to = "/home">Home</Link></li>
      <li><Link to = "/page1">Page1</Link></li>
      <li><Link to = "/page2">Page2</Link></li>
      <li><Link to = "/page3">Page3</Link></li>
    </ul>
  )};
export default SideBar;
