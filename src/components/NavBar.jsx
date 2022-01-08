import React, { Component } from "react"
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Globe2 } from "react-bootstrap-icons"
import { PersonCircle } from "react-bootstrap-icons"
import { List } from "react-bootstrap-icons"
import { NavDropdown } from "react-bootstrap"
import "./navBar.css"
import AirbnbLogoSmall from "../icons/AirbnbLogoSmall"
import AirbnbLogoLarge from "../icons/AirbnbLogoLarge"

export default class NavBar extends Component {
  render() {
    return (
      <Navbar variant="dark" className="navBar">
        <div className="d-flex justify-content-between w-100">
          <Navbar.Brand href="#home" className="logo">
            <AirbnbLogoSmall className="d-block d-md-none logo " />
            <AirbnbLogoLarge className="d-none d-md-block logo" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="inner-nav" href="#home">
              Places to stay
            </Nav.Link>
            <Nav.Link className="inner-nav" href="#features">
              Experiences
            </Nav.Link>
            <Nav.Link className="inner-nav" href="#pricing">
              Online Experiences
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="side-nav" href="#pricing">
              Become a host
            </Nav.Link>
            <Nav.Link className="side-nav">
              <Globe2></Globe2>
            </Nav.Link>
            <NavDropdown
              className="user-menu "
              title={
                <span>
                  <List className=" mr-3" color="grey"></List>
                  <PersonCircle color="grey"></PersonCircle>
                </span>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#">Sign up </NavDropdown.Item>
              <NavDropdown.Item href="#">Log in</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Host your home</NavDropdown.Item>

              <NavDropdown.Item href="#">Host an experience</NavDropdown.Item>
              <NavDropdown.Item href="#">Help</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </Navbar>
    )
  }
}
