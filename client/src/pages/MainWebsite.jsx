import React, { Component } from 'react';

import SiteHeader from "../cmps/SiteHeader";
import SiteFooter from "../cmps/SiteFooter";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import MyFlights from "../pages/MyFlights";
import Login from "./Login";
import Admin from "./Admin";

const links = {
  Home: "/",
  About: "/About",
  MyFlights: "/MyFlights",
  Login: "/Login",
  Admin: "/Admin"
};

const defaultUser = '000000';

export default class MainWebsite extends Component {
	constructor() {
		super();
		if (!localStorage.getItem('userid')) {
			this.state = {
				connectedUser: defaultUser,
			};
		} else {
			this.state = {
				connectedUser: localStorage.getItem('userid'),
			};
		}
	}

	setConnectedUser = (userId) => {
		this.setState({ connectedUser: userId });
	};

	render() {
		const { connectedUser } = this.state;
		return (
			<div className='page' >
				<SiteHeader
					links={links}
					connectedUser={this.state.connectedUser}
					setConnectedUser={this.setConnectedUser}
				/>
				<Routes>
					<Route path={links.Home} element={<Home connectedUser={connectedUser} />} />
					<Route path={links.About} element={<About />} />
					<Route
						path={links.Login}
						element={
							<Login setConnectedUser={this.setConnectedUser} homeLink={links.Home} />
						}
					/>
					<Route
						path={links.MyFlights}
						element={<MyFlights connectedUser={connectedUser} />}
					/>
          <Route
            path={links.Admin}
            element={<Admin />}
          />
				</Routes>
				<SiteFooter />
			</div>
		);
	}
}
