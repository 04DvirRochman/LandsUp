import React, { Component } from "react";

import SiteHeader from "../cmps/SiteHeader";
import SiteFooter from "../cmps/SiteFooter";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import MyFlights from "../pages/MyFlights";
import Login from "./Login";

export default class MainWebsite extends Component {
  constructor() {
    super();
    this.state = {
      connectedUser: "000000",
      links: {
        Home: "/",
        About: "/About",
        MyFlights: "/MyFlights",
        Login: "/Login",
      },
    };
  }

  setConnectedUser = (userId) => {
    this.setState({ connectedUser: userId });
  };

  render() {
    const links = this.state.links;

    const { connectedUser } = this.state;
    return (
      <div>
        <SiteHeader links={links} />
        <Routes>
          <Route path={links.Home} element={<Home />} />
          <Route path={links.About} element={<About />} />
          <Route
            path={links.Login}
            element={<Login setConnectedUser={this.setConnectedUser} homeLink = {this.state.links.Home} />}
          />
          <Route
            path={links.MyFlights}
            element={<MyFlights connectedUser={connectedUser} />}
          />
        </Routes>
        <SiteFooter />
      </div>
    );
  }
}
