import React, { Component } from 'react'
import Button from 'react-bootstrap/esm/Button'

export default class FlightFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flights: props.flights,
        }
    }

    onChangeSearch = () => {

    }

    render() {
        const {onSetFilter,onSearch} = this.props;
        return (
            <div className='d-flex mb-3'>
                <input onInput={(event)=>onSearch(event.target.value)} className="form-control" type="search" placeholder="Search Flight" aria-label="Search"></input>
                <Button onClick={()=>onSetFilter({origin:'Tel Aviv'})} className='col-3 mx-1'>Departures</Button>
                <Button onClick={()=>onSetFilter({destination:'Tel Aviv'})} className='col-3 mx-1'>Arrivals</Button>
            </div>
        )
    }
}
