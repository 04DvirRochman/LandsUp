import React, { Component } from 'react'
import Collapse from 'react-bootstrap/esm/Collapse';
import Accordion from 'react-bootstrap/Accordion';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import Button from 'react-bootstrap/esm/Button';

export default function FlightDetails(props) {

    const { flight } = props;
    return (
        <AccordionBody className='text-start'>
            <h3>{flight.name} {flight.origin}-{flight.destination}</h3>
            <p className='mb-0'>Departure time: {flight.departuretime}</p>
            <p className='mb-0'>Arrival time: {flight.arrivaltime}</p>
            <p className='mb-0'>Airline: {flight.airline}</p>
            <p className='mb-0'>terminal: {flight.terminal}</p>
            <div className='row d-flex justify-content-end'>
                <Button className='col-3'>Subscribe</Button>
            </div>

        </AccordionBody>
    )
}
