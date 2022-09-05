import React, { Component } from 'react'
import style from './LoginInput.module.css' 

export default class LoginInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
          input: props.inputData
        };
      }

      reLoad(){
        this.state = {
          input: this.props.inputData
        };
      }
    
      handleChange(thingToChange,event){
        const value = event.target.value;
        let input = {...this.state.input};
        input[thingToChange] = value
        this.props.updateInput(input)
      }



  render() {
    this.reLoad()
    return (
        
      <div  className={style.box}>
        <input type="text" className={style.input}  placeholder="user name"  onChange = {(e)=>this.handleChange("userName",e) } name="userName" value = {this.state.input.userName}/>
        <br></br>
        <input type="text"  className={style.input} placeholder="Password" onChange = {(e)=>this.handleChange("password",e) } name="password" value = {this.state.input.password}/>
        </div>
    )
  }
}

