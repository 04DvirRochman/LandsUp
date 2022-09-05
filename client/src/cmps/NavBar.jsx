import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";

export default function NavBar (props){
    const {links} = props;
    return (
        <Navbar className="navbar-dark" bg="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to={links.Home}>Home</NavLink>
              <NavLink className="nav-link" to={links.MyFlights}>My Flights</NavLink>
              <NavLink className="nav-link" to={links.About}>About</NavLink>
              <NavLink className="nav-link" to={links.Login}>Login</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
