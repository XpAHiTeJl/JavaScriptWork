import Navbar from "./navbar";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./contact";
import About from "./about";

function Main() {
  return (
    <div>
      <HashRouter>
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default Main;
