import React, { Component } from "react";
import LoginInput from "../cmps/LoginInput";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../services/userService";

class LoginInner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: { userName: "", password: "" },
      error: "",
    };
  }

  updateInput = (input) => {
    this.setState({ input: input });
  };

  signUp = () => {
    signup(this.state.input.userName, this.state.input.password).then(
      (user) => {
        if (user.id) {
          this.props.setConnectedUser(user.id);
          this.props.navigation(this.props.homeLink);
        }
      }
    ).catch((err) => this.setState({ error: "invalid params" }));
  };

  login = () => {
    login(this.state.input.userName, this.state.input.password)
      .then((user) => {
        if (user.id) {
          this.props.setConnectedUser(user.id);
          this.props.navigation(this.props.homeLink);
        }
      }
    ).catch((error) => this.setState({ error: "user name or password is invalid" }))
  };

  desplayError() {
    if (this.state.error) {
      return <b>{this.state.error}</b>;
    } else {
      return <></>;
    }
  }

  render() {
    return (
      <div className="mt-4 page">
        <LoginInput
          updateInput={this.updateInput}
          inputData={this.state.input}
        />
        <div className="mt-2 mb-2">
          <Button className="mx-2" onClick={this.signUp}>
            Sign Up
          </Button>
          <Button className="mx-2" onClick={this.login}>
            {" "}
            Login
          </Button>
        </div>
        {this.desplayError()}
      </div>
    );
  }
}

export default function Login(props) {
  const navigation = useNavigate();

  return <LoginInner {...props} navigation={navigation} />;
}
