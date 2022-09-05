import React, { Component } from 'react'

import SiteHeader from '../cmps/SiteHeader'
import SiteFooter from '../cmps/SiteFooter'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import MyFlights from '../pages/MyFlights';

export default class MainWebsite extends Component {

    constructor(){
        super();
        this.state = {
            connectedUser : '5y9a00'
        }
    }

    setConnectedUser = (userId) => {
        this.setState({connectedUser: userId});
    };


    render() {
        const {connectedUser} = this.state;
        return (
            <div>
                <SiteHeader links={{ Home: "/", About: "/About" }} />
                <Routes>
                    <Route path='/' element={<Home connectedUser={connectedUser}/>} />
                    <Route path='/About' element={<About />} />
                    <Route path='/MyFlights' element={<MyFlights connectedUser={connectedUser}/>} />
                </Routes>
                <SiteFooter />
            </div>
        )
    }
}
