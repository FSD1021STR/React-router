import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 style={{ marginTop: "50px" }}>Home</h1>
      <button onClick={() => navigate("/page1")}>Page 1</button>
      <button onClick={() => navigate("/page2")}>Page 2</button>
      <button onClick={() => navigate("/page3")}>Page 3</button>
    </>
  );
};
export default Home;
