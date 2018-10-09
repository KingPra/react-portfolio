import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavLink extends Component {
  render() {
    return (
      <li className={this.props.isActive ? "active" : ""}>
        <Link to={this.props.path}>{this.props.text}</Link>
      </li>
    );
  }
}
