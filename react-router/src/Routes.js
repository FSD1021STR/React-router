import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";

const Navigator = () => {
  return (
    <Routes>
      <Route path ="/home" exact component ={Home}/>
      <Route path ="/page1" component ={Page1}/>
      <Route path ="/page2" exact component ={Page2}/>
      <Route path ="/page3" exact component ={Page3}/>
    </Routes>
  );
};
export default Navigator;
