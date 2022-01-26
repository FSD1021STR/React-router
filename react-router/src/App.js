import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar/navBar";
import SideBar from "./SideBar/sideBar";
import Navigation from "./Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <SideBar />
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
