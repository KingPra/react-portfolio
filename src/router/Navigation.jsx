import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./navigation.css";

import Hero from "../components/Home";
import Contact from "../components/Contact";

const Navigation = () => (
  <Router>
    <div className="container">
      <div className="logo">King</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li />
        <li>
          <Link to="portfolio">Portfolio</Link>
        </li>

        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
      <Route exact path="/" component={Hero} />

      <Route exact path="/contact" component={Contact} />
    </div>
  </Router>
);

export default Navigation;
