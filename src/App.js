import "./styles/style.css";
import React from "react";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Gallery from "./pages/Gallery";
import { Route } from "react-router-dom";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" exact component={Home}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/aboutme" component={AboutMe}></Route>
      <Route path="/contactme" component={ContactMe}></Route>
      <Route path="/gallery" component={Gallery}></Route>
    </div>
  );
}

export default App;
