import React, { Component } from 'react'
import style from './LoginInput.module.css'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

export default class LoginInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: props.inputData
    };
  }

  reLoad() {
    this.state = {
      input: this.props.inputData
    };
  }

  handleChange(thingToChange, event) {
    const value = event.target.value;
    let input = { ...this.state.input };
    input[thingToChange] = value
    this.props.updateInput(input)
  }

  render() {
    this.reLoad();
    return (
      <Container className='px-5'>
        <form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="username" placeholder="User Name" onChange={(e) => this.handleChange("userName", e)} name="userName" value={this.state.input.userName} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => this.handleChange("password", e)} name="password" value={this.state.input.password} />
          </Form.Group>
        </form>
      </Container>
    )
  }
}
