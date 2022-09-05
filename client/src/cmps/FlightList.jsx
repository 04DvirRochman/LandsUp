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
                    <h5 className='col text-light text-start'>code</h5>
                    <h5 className='col text-light text-start'>origin</h5>
                    <h5 className='col text-light text-start'>destination</h5>
                    <h5 className='col text-light text-start'>departure</h5>
                    <h5 className='col text-light text-start'>arrival</h5>
                    <h5 className='col text-light text-start'>airline</h5>
                    <h5 className='col text-light text-start'>terminal</h5>
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
                            : <h5 className='m-4'>No flights has found</h5>
                }
            </Accordion>
        </div>
    );
}
