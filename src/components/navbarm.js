import React, { Component } from "react";
import "../mobile.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../images/logo.png";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import { FaBars } from "react-icons/fa";

class Navbarm extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar>
          <Navbar.Brand href={"#home"}>
            {" "}
            <img src={logo} alt="" className="logom" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <DropdownButton
                alignRight
                title={<FaBars />}
                id="dropdown-menu d-inline"
              >
                <Dropdown.Item eventKey="1">Quienes Somos?</Dropdown.Item>
                <Dropdown.Item eventKey="2">Planes</Dropdown.Item>
                <Dropdown.Item eventKey="3">Contacto</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Login/Register</Dropdown.Item>
              </DropdownButton>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Navbarm;
