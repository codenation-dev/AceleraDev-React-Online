import React from "react";
import "./App.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Github</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/team">Team</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/user/:name" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
