import React, { Component } from "react";
import "../main.css";
import logo from "../images/logo.png";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <header className=".navbar-default">
          <ul>
            <img src={logo} alt="logo" />
            <li>
              <a href={"/contact"}>Contacto</a>
            </li>
            <li>
              <a href={"/about"}>¿Quienes Somos?</a>
            </li>
            <li>
              <a href={"/plans"}>Planes</a>
            </li>
            <li>
              <a href={"/register"}>Login</a>
            </li>
            <li>
              <a href={"/"}>Home</a>
            </li>
          </ul>
        </header>
      </React.Fragment>
    );
  }
}

export default Navbar;
