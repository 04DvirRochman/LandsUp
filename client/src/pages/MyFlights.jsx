import React, { Component } from 'react'
import FlightList from '../cmps/FlightList';
import organizeDate from '../services/utills';
import { getUserSubs,createSubscription,deleteSubscription} from '../services/subscriptionService';
import FlightFilter from '../cmps/FlightFilter';

export default class MyFlights extends Component {


	constructor(props) {
		super(props);
		this.state = {
			flights: [],
			filter:{},
			loadingFlights: false,
			filteredFlights:[],
			connectedUser: props.connectedUser,
		};
	}

	componentDidMount() {
		this.loadFlights();
	}

	loadFlights = () => {
		this.setState({ loadingFlights: true });
		getUserSubs(this.state.connectedUser,this.state.filter)
			.then((allFlights) => {
				allFlights = allFlights.map((flight) => {
					flight.departuretime = organizeDate(new Date(flight.departuretime));
					flight.arrivaltime = organizeDate(new Date(flight.arrivaltime));
					return flight;
				});
				this.setState({ flights: allFlights, filteredFlights: allFlights});
			})
			.finally(() => this.setState({ loadingFlights: false }));
	}

	openFilghtDetails = (id) => {
		this.setState({ DetailsOpen: id });
	};
	onSetFilter = (filter) => {
        this.setState({ filter: filter }, () => this.loadFlights());
    }

    onSearch = (filter) => {
        let filteredFlights = this.state.flights;
        if (!filter) {
            this.setState({ filteredFlights: this.state.flights });
            return;
        }
        filteredFlights = filteredFlights.filter((flight) => (this.isFilterFound(flight.origin, filter) || this.isFilterFound(flight.destination, filter)))
        this.setState({ filteredFlights: filteredFlights });
    }

    isFilterFound = (value, filter) => {
        if (value.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
            return true;
        }
        return false;
    }
	onClickSubscribe = async (isSubscribed,flight) =>{
        if(isSubscribed){
            await deleteSubscription(this.state.connectedUser,flight.id);
        }else{
            await createSubscription(this.state.connectedUser,flight.id);
        }
        let subs = await getUserSubs(this.state.connectedUser);
        await this.setState({flights: subs});
		this.loadFlights();
    }

	render() {
		const { flights, loadingFlights,filteredFlights} = this.state;
		return (
			<div className='container-sm mt-5'>
				<FlightFilter onSearch={this.onSearch} onSetFilter={this.onSetFilter} flights={flights} />
				<FlightList
					onClickSubscribe={this.onClickSubscribe}
					subscriptions={filteredFlights}
					flights={filteredFlights}
					openFilghtDetails={this.openFilghtDetails}
					loadingFlights={loadingFlights}
				/>
			</div>
		);
	}
}
