import React, { Component } from 'react'
import FlightList from '../cmps/FlightList';
import { getFlightsFromDB } from '../services/flightService';
import organizeDate from '../services/utills';
import {getSubscriptionsFromDB} from '../services/userService';

export default class MyFlights extends Component {


    constructor(props) {
		super(props);
		this.state = {
			flights: [],
			loadingFlights: false,
            connectedUser: props.connectedUser
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
