import React, { Component } from 'react'
import FlightList from '../cmps/FlightList'
import { getAll } from '../services.js'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            flights: [],
            loadingFlights: false,
            DetailsOpen: null
        }
    }

    componentDidMount() {
        this.setState({ loadingFlights: true })
        getAll().then(allFlights => {
            this.setState({ flights: allFlights })
        }).finally(() => this.setState({ loadingFlights: false }))
    }

    openFilghtDetails=(id)=>{
        this.setState({DetailsOpen: id});
    }

    render() {
        const { flights, loadingFlights,DetailsOpen } = this.state;
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
                <FlightList flights={flights} DetailsOpen={DetailsOpen} openFilghtDetails={this.openFilghtDetails}/>
            </div>

        )
    }
}
