import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../logo.svg";

const NavBar = () => {
  return (
    <div className="container">
      <Link to="/home"> Home </Link>
      <Link to="/page1"> Home </Link>
      <Link to="/page2"> Home </Link>
      <Link to="/page3"> Home </Link>
    </div>
  );
};
export default NavBar;
