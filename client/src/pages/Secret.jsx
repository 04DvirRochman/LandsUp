import React, { Component } from "react";
import pooplogo from "../images/pooplogo.jpeg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";

export default class Secret extends Component {
  render() {
    return (
      <div>
        <div className="row zero-padding">
          <div className="container zero-padding position-relative ">
            <img className="img" src={pooplogo} alt="site logo" />
            <div className="logo-text"> MyPoopBuddies.com </div>
            <Navbar className="navbar-dark" bg="dark" expand="lg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <NavLink className="nav-link" to={'/poop'}>
                      Home
                    </NavLink>
                    <NavLink className="nav-link" to={'/poop/about'}>
                    About
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <h4>your favorite poop website</h4>
          </div>
        </div>
        <h1>This site is all about poop</h1>
      </div>
    );
  }
}
