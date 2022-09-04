import React, { Component } from 'react';
import FlightList from '../cmps/FlightList';
import { getFlightsFromDB } from '../services/flightService';
import organizeDate from '../services/utills';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			flights: [],
			loadingFlights: false,
		};
	}

	componentDidMount() {
		this.setState({ loadingFlights: true });
		getFlightsFromDB()
			.then((allFlights) => {
				allFlights = allFlights.map((flight) => {
					flight.departuretime = organizeDate(new Date(flight.departuretime));
                    flight.arrivaltime = organizeDate(new Date(flight.arrivaltime));
					return flight;
				});
				this.setState({ flights: allFlights });
			})
			.finally(() => this.setState({ loadingFlights: false }));
	}

	openFilghtDetails = (id) => {
		this.setState({ DetailsOpen: id });
	};

	render() {
		const { flights, loadingFlights } = this.state;
		if (loadingFlights) {
			return;
		}
		if (flights.length < 1) {
			return;
		}
		console.log(flights);
		return (
			<div>
				<FlightList
					flights={flights}
					openFilghtDetails={this.openFilghtDetails}
				/>
			</div>
		);
	}
}
