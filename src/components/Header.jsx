import React, { Component } from "react";
import Navlink from "../router/Navlink";
import { Link } from "react-router-dom";

export default class Header extends Component {
  state = {
    links: [
      { path: "/Hero", text: "Home", isActive: false },
      { path: "/contact", text: "Contact", isActive: false }
    ]
  };

  handleClick = i => {
    const links = this.state.links.slice();
    for (const j in links) {
      links[j].isActive = i === j;
    }
    this.setState({ links: links });
  };

  render() {
    return (
      <nav>
        <Link to="/">King Pra</Link>
        <div>
          <ul>
            {this.state.links.map((link, i) => (
              <Navlink
                path={link.path}
                text={link.test}
                isActive={link.isActive}
                key={link.path}
                onClick={() => this.handleClick(i)}
              />
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}
