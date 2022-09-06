import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar(props) {
	const { links, connectedUser, setConnectedUser } = props;
	if (connectedUser != '000000') {
		return (
			<Navbar className='navbar-dark' bg='dark' expand='lg'>
				<Container>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto d-flex'>
							<NavLink className='nav-link' to={links.Home}>
								Home
							</NavLink>
							<NavLink className='nav-link' to={links.MyFlights}>
								My Flights
							</NavLink>
							<NavLink className='nav-link' to={links.About}>
								About
							</NavLink>
							<Link
								className='nav-link'
								style={{ marginLeft: '52vw' }}
								onClick={() => setConnectedUser('000000')}
								to={links.Home}>
								Logout
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	} else {
		return (
			<Navbar className='navbar-dark' bg='dark' expand='lg'>
				<Container>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<NavLink className='nav-link' to={links.Home}>
								Home
							</NavLink>
							<NavLink className='nav-link' to={links.About}>
								About
							</NavLink>
							<NavLink
								style={{ marginLeft: '57vw' }}
								className='nav-link'
								to={links.Login}>
								Login
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}
