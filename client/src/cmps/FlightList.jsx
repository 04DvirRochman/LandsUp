import React, { Component } from 'react'
import FightPreview from './FightPreview'
import Accordion from 'react-bootstrap/esm/Accordion';

export default function FlightList(props) {

    const { flights } = props;
    let flightKeys = Object.keys(flights[0]);

    return (
        <div>

            <div className='bg-dark px-4'>
                <div className='row '>
                    {flightKeys.map((flightValue, index) => { if (index !== 0) { return <h4 key={index} className='col text-light text-start'>{flightValue}</h4> } })}
                    <div className='col-1'></div>
                </div>

            </div>

            <Accordion defaultActiveKey="0">
                {flights.map((flight, index) => <FightPreview flight={flight} key={flight.id} eventKey={index} />)}
            </Accordion>
        </div>
    );
}
