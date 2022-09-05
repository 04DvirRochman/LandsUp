import React, { Component } from "react";
import FlightList from "../cmps/FlightList";
import { getFlightsFromDB } from "../services/flightService";
import { organizeDate } from "../services/utils";
import FlightFilter from "../cmps/FlightFilter";
import {
  getUserSubs,
  createSubscription,
  deleteSubscription,
} from "../services/subscriptionService";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
      loadingFlights: false,
      filter: {},
      filteredFlights: [],
      subscriptions: [],
      connectedUser: props.connectedUser,
    };
  }

  componentDidMount() {
    this.loadFlights();
  }

  loadFlights = async () => {
    this.setState({ loadingFlights: true });
    let allFlights = await getFlightsFromDB(this.state.filter);
    allFlights = allFlights.map((flight) => {
      flight.departuretime = organizeDate(new Date(flight.departuretime));
      flight.arrivaltime = organizeDate(new Date(flight.arrivaltime));
      return flight;
    });
    let subscriptions = await getUserSubs(this.state.connectedUser);

    this.setState({
      flights: allFlights,
      filteredFlights: allFlights,
      subscriptions: subscriptions,
    });
    this.setState({ loadingFlights: false });
  };

  openFilghtDetails = (id) => {
    this.setState({ DetailsOpen: id });
  };

  onSetFilter = (filter) => {
    this.setState({ filter: filter }, () => this.loadFlights());
  };

  onSearch = (filter) => {
    let filteredFlights = this.state.flights;
    if (!filter) {
      this.setState({ filteredFlights: this.state.flights });
      return;
    }
    filteredFlights = filteredFlights.filter(
      (flight) =>
        this.isFilterFound(flight.origin, filter) ||
        this.isFilterFound(flight.destination, filter)
    );
    this.setState({ filteredFlights: filteredFlights });
  };

  isFilterFound = (value, filter) => {
    if (value.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
      return true;
    }
    return false;
  };

  onClickSubscribe = async (isSubscribed, flight) => {
    if (isSubscribed) {
      await deleteSubscription(this.state.connectedUser, flight.id);
    } else {
      await createSubscription(this.state.connectedUser, flight.id);
    }
    let subs = await getUserSubs(this.state.connectedUser);
    this.setState({ subscriptions: subs });
  };

  render() {
    const { flights, loadingFlights, filteredFlights, subscriptions } =
      this.state;
    return (
      <div className="container-sm mt-5">
        <FlightFilter
          onSearch={this.onSearch}
          onSetFilter={this.onSetFilter}
          flights={flights}
        />
        <FlightList
          onClickSubscribe={this.onClickSubscribe}
          subscriptions={subscriptions}
          flights={filteredFlights}
          openFilghtDetails={this.openFilghtDetails}
          loadingFlights={loadingFlights}
        />
      </div>
    );
  }
}
