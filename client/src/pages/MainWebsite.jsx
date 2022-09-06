import React, { Component } from 'react';

import SiteHeader from '../cmps/SiteHeader';
import SiteFooter from '../cmps/SiteFooter';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import MyFlights from '../pages/MyFlights';
import Login from './Login';

const links = {
	Home: '/',
	About: '/About',
	MyFlights: '/MyFlights',
	Login: '/Login',
};

const defaultUser = '000000';

export default class MainWebsite extends Component {
	constructor() {
		super();
		this.state = {
			connectedUser: defaultUser,
		};
	}

	setConnectedUser = (userId) => {
		this.setState({ connectedUser: userId });
	};

	render() {
		const { connectedUser } = this.state;
		return (
			<div className='main-website' style={{ backgroundColor: '#BFACE0' }}>
				<SiteHeader links={links} connectedUser={this.state.connectedUser} />
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
				</Routes>
				<SiteFooter />
			</div>
		);
	}
}
