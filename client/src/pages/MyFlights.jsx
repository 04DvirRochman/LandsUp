import React, { Component } from 'react'
import FlightList from '../cmps/FlightList';
import organizeDate from '../services/utills';
import { getUserSubs} from '../services/subscriptionService';
import FlightFilter from '../cmps/FlightFilter';

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
		this.loadFlights();
	}

	loadFlights = () => {
		this.setState({ loadingFlights: true });
		getUserSubs(this.state.connectedUser)
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

	onSearch = (filter) => {
		let filteredFlights = this.state.flights;
		if (!filter) {
			this.loadFlights();
			return;
		}
		console.log(filteredFlights);
		filteredFlights = filteredFlights.filter((flight) => (this.isFilterFound(flight.origin, filter) || this.isFilterFound(flight.destination, filter)))
		this.setState({ flights: filteredFlights });
	}

	isFilterFound = (value, filter) => {
		if (value.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
			return true;
		}
		return false;
	}

	render() {
		const { flights, loadingFlights } = this.state;
		return (
			<div className='container-sm mt-5'>
				<FlightFilter onSearch={this.onSearch} onSetFilter={this.onSetFilter} flights={flights} />
				<FlightList
					flights={flights}
					openFilghtDetails={this.openFilghtDetails}
					loadingFlights={loadingFlights}
				/>
			</div>
		);
	}
}
