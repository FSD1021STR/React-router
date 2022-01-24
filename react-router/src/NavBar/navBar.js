import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../logo.svg";

const NavBar = () => {
  return (
    <div className="container">
      <div className="links-container">
        <Link className = "links" to ="/home"><img className="App-logo" src={logo}/></Link> 
        <Link className = "links" to ="/home">Home</Link>
        <Link className = "links" to ="/page1">Page1</Link> 
        <Link className = "links" to ="/page2">Page2</Link> 
        <Link className = "links" to ="/page3">Page3</Link> 
      </div>
    </div>
  );
};
export default NavBar;
