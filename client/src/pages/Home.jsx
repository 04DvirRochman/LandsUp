import React, { Component } from 'react';
import FlightList from '../cmps/FlightList';
import { getFlightsFromDB } from '../services/flightService';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			items: [],
			loadingTasks: false,
		};
	}

	componentDidMount() {
		this.setState({ loadingTasks: true });
		getFlightsFromDB()
			.then((allTasks) => {
				this.setState({ tasks: allTasks });
			})
			.finally(() => this.setState({ loadingTasks: false }));
	}

	render() {
		return <div>hi</div>;
	}
}
