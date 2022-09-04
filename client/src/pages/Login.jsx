import React, { Component } from "react";
import PersonalInfoList from "../cmps/PersonalInfoList";
import LoginInput from "../cmps/LoginInput";
import Button from "react-bootstrap/esm/Button";
import { useHistory } from "react-router-dom";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: { userName: "", password: "" },
      error: ""
    };
  }

  updateInput=(input)=> {
    this.setState({ input: input });
   
  }
  signUp(){
  //const history = useHistory();
  // do thing 
  //if(res === userExist){ 
  // this.setState(error userExsiest)
  //} else {
  // setConnectedUser(id)
  //   history.push(this.props.HomePageLink);
  // }
  }


  login(){
  //const history = useHistory();
  // do thing 
  //if(res === undefined){ 
  // this.setState(error:true)
  //}else {
  // setConnectedUser(id)
  // history.push(this.props.HomePageLink);
  //}
  }
  
  desplayError(){
    if(this.state.error){
    return(<bold>{this.state.error}</bold>)}else{
      return(<></>)
    }
  }

  render() {
    return (
      <div className="mt-4">
        <LoginInput
          updateInput={this.updateInput}
          inputData={this.state.input}
        />
        <div className="mt-2 mb-2">
        <Button className="mx-2">Sign Up</Button>
        <Button className="mx-2"> Login In</Button>
        </div>
        {this.desplayError()}
      </div>
    );
  }
}
