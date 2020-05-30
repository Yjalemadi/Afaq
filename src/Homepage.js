import React, { Component } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pmpage">PM Homepage</Link>
          </li>
          <li>
            <Link to="/slpage">SL Homepage</Link>
          </li>
          <li>
            <Link to="/gdpage">GD Homepage</Link>
          </li>
          <li>
            <Link to="/gdprofile">GD Profile</Link>
          </li>
          <li>
            <Link to="/planner">Rotation Planner</Link>
          </li>
          <li>
            <Link to="/gdarchives">GD Archives</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Homepage;
