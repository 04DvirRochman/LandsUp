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
			DetailsOpen: null,
		};
	}

	componentDidMount() {
		this.setState({ loadingFlights: true });
		getFlightsFromDB()
			.then((allFlights) => {
				allFlights = allFlights.map((flight) => {
					flight.departuretime = organizeDate(new Date(flight.departuretime));
                    flight.arrivaltime = organizeDate(new Date(flight.arrivaltime));

					// if (date.getMinutes() > 9) {
					// 	flight.departuretime = `${date.getHours()}:${date.getMinutes()}`;
					// } else {
					// 	flight.departuretime = `${date.getHours()}:0${date.getMinutes()}`;
					// }
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
		const { flights, loadingFlights, DetailsOpen } = this.state;
		if (loadingFlights) {
			return;
		}
		if (flights.length < 1) {
			return;
		}
		console.log(flights);
		return (
			<div>
				home
				<FlightList
					flights={flights}
					DetailsOpen={DetailsOpen}
					openFilghtDetails={this.openFilghtDetails}
				/>
			</div>
		);
	}
}
