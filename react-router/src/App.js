import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar/navBar";
import SideBar from "./SideBar/sideBar";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
        <NavBar />
        <SideBar />
        <Routes />
    </div>
  );
}

export default App;
