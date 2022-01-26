import React from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";

const SideBar = () => {
  return (
    <ul className="container-sidebar">
      <li className="sidebar-item">
        <Link  to="/home">
          Home
        </Link>
      </li>
      <li className="sidebar-item">
        <Link  to="/page1">
          Page 1
        </Link>
      </li>
      <li className="sidebar-item">
        <Link  to="/page2">
          Page 2
        </Link>
      </li>
      <li className="sidebar-item">
        <Link className="item" to="/page3">
          Page 3
        </Link>
      </li>
    </ul>
  );
};
export default SideBar;