import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Login} />
        <Route path="/Home" component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
