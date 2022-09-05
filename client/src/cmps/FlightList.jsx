import React, { Component } from 'react'
import FightPreview from './FightPreview'
import Accordion from 'react-bootstrap/esm/Accordion';
import Spinner from 'react-bootstrap/Spinner';


export default function FlightList(props) {

    const { flights, loadingFlights, subscriptions, onClickSubscribe } = props;
    let flightKeys
    if (flights.length > 0) {
        flightKeys = Object.keys(flights[0]);
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
                    (loadingFlights) ?
                        <Spinner className='m-4' animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> :
                        (flights.length > 0) ?
                            flights.map((flight, index) => <FightPreview onClickSubscribe={onClickSubscribe} subscriptions={subscriptions} flight={flight} key={index} eventKey={index} />)
                            : <h4 className='m-4'>No flights has found</h4>
                }
            </Accordion>
        </div>
    );
}
