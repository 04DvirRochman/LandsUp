import React, { Component } from 'react'
import Button from 'react-bootstrap/esm/Button'

export default class FlightFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flights: props.flights
        }
    }

    onClickDepartures = () => {

    }

    onClickArrivals = () => {

    }

    onChangeSearch = () => {

    }

    render() {
        return (
            <div className='d-flex mb-3'>
                <input className="form-control" type="search" placeholder="Search Flight" aria-label="Search"></input>
                <Button className='col-3 mx-1'>Departures</Button>
                <Button className='col-3 mx-1'>Arrivals</Button>
            </div>
        )
    }
}
