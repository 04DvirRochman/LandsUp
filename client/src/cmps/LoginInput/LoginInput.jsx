import React, { Component } from 'react'
import style from './LoginInput.module.css' 

export default class LoginInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
          input: props.inputData
        };
      }
    
      handleChange(thingToChange,event){
        const value = event.target.value;
        let input = {...this.state.input};
        input[thingToChange] = value
        this.props.updateInput(input)
      }



  render() {
    return (
        
      <div  className={style.box}>
        <input type="text" className={style.input}  placeholder="user name"  onChange = {(e)=>this.handleChange("userName",e) } name="userName" value = {this.state.userName}/>
        <br></br>
        <input type="text"  className={style.input} placeholder="Password" onChange = {(e)=>this.handleChange("password",e) } name="password" value = {this.state.password}/>
        </div>
    )
  }
}
