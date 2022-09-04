import React, { Component } from "react";
import PersonalInfoList from "../cmps/PersonalInfoList";


export default class Login extends Component {
    constructor(props) {
		super(props);
		this.state = {
			currAction :"home Page"
		};
	}




  render() {
    return <>

    <button type="button">Login</button>
    <button type="button">Sign Up</button>

    </>;
  }
}



