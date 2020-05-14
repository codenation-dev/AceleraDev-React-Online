import React from "react";
import "./App.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Team from "./pages/Team";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Github</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/team">Team</Nav.Link>
        </Nav>
      </Navbar>
      <Home />
      <Profile />
      <About />
      <Team />
    </div>
  );
}

export default App;
