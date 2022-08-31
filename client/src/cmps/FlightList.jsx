import React, { Component } from 'react'
import FightPreview from './FightPreview' 

export default class FlightList extends Component {
    render() {
        const{flights} = this.props;
        return (
            <div>
                <ul>
                    {flights.map((flight) =><FightPreview flight={flight}/>)}
                </ul>
            </div>
        )
    }
}
