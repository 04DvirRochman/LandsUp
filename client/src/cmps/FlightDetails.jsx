import React, { Component } from 'react'
import Collapse from 'react-bootstrap/esm/Collapse';
import Accordion from 'react-bootstrap/Accordion';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import Button from 'react-bootstrap/esm/Button';
import { createSubscription ,deleteSubscription} from '../services/subscriptionService';

export default function FlightDetails(props) {
    
    const { flight,onClickSubscribe,subscriptions } = props;
    let isSubscribed = subscriptions.some((sub)=>sub.id === flight.id);
    
    

    return (
        <AccordionBody className='text-start'>
            <h3>{flight.name} {flight.origin}-{flight.destination}</h3>
            <p className='mb-0'>Departure time: {flight.departuretime}</p>
            <p className='mb-0'>Arrival time: {flight.arrivaltime}</p>
            <p className='mb-0'>Airline: {flight.airline}</p>
            <p className='mb-0'>terminal: {flight.terminal}</p>
            <div className='row d-flex justify-content-end'>
                <Button onClick={()=> onClickSubscribe(isSubscribed,flight)} className='col-3'>{isSubscribed? "Unsubscribe" : "Subscribe"} </Button>
            </div>

        </AccordionBody>
    )
}
