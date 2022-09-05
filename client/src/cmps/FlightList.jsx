import React, { Component } from 'react'
import FightPreview from './FightPreview'
import Accordion from 'react-bootstrap/esm/Accordion';
import Spinner from 'react-bootstrap/Spinner';


export default function FlightList(props) {

    const { flights, loadingFlights } = props;
    let flightKeys
    if(flights.length > 0){
        flightKeys= Object.keys(flights[0]);
    }
    

    return (
        <div>
            <div className='bg-dark px-4'>
                <div className='row '>
                <h4 className='col text-light text-start'>name</h4>
                <h4 className='col text-light text-start'>origin</h4>
                <h4 className='col text-light text-start'>destination</h4>
                <h4 className='col text-light text-start'>departure</h4>
                <h4 className='col text-light text-start'>arrival</h4>
                <h4 className='col text-light text-start'>airline</h4>
                <h4 className='col text-light text-start'>terminal</h4>
                    <div className='col-1'></div>
                </div>

            </div>

            <Accordion defaultActiveKey="0">
                {
                        (!loadingFlights && flights.length > 0) ? (flights.map((flight, index) => <FightPreview flight={flight} key={flight.id} eventKey={index} />)): <Spinner className='m-4' animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                }
            </Accordion>
        </div>
    );
}
