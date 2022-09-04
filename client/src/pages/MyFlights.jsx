import React, { Component } from 'react'
import FlightList from '../cmps/FlightList';
import organizeDate from '../services/utills';
import {getUserSubsFromDB} from '../services/subscriptionService';

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
		getUserSubsFromDB(this.state.connectedUser)
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
