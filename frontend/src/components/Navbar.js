
import React, { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    // Set initial state here if needed
    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Munah School</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={
              this.state.clicked ? "fas fa-times" : "fas fa-bars"
            }
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li>
            <button><NavLink to="/signup">Sign Up</NavLink></button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
 