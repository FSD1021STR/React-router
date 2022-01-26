import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../logo.svg";

const NavBar = () => {
  return (
    <div className="container">
      <div className="links-container">
        <Link className="links" to="/home">
          <div className="img-logo">
            <img
              className="App-logo"
              src={logo}
              alt="logo"
              width="150px"
              height="150px"
            />
          </div>
        </Link>
        <Link className="links" to="/home">
          Home
        </Link>
        <Link className="links" to="/page1">
          Page 1
        </Link>
        <Link className="links" to="/page2">
          Page 2
        </Link>
        <Link className="links" to="/page3">
          Page 3
        </Link>
        <Link className="links" to="/page4">
          Page 3
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
