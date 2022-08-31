import React, { Component } from 'react'
import FlightList from '../cmps/FlightList'
import { getAll } from '../services.js'


export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            items: [],
            loadingTasks: false
        }
    }

    componentDidMount() {
        this.setState({ loadingTasks: true })
        getAll().then(allTasks => {
            this.setState({ tasks: allTasks })
        }).finally(() => this.setState({ loadingTasks: false }))
    }

    render() {

        return (
            <div>
                hi
            </div>
        )
    }
}
