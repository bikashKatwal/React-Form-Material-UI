import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Form extends Component{

    state={
        firstName:'',
        firstNameError:'',
        lastName:'',
        lastNameError:'',
        userName:'',
        userNameError:'',
        email:'',
        emailError:'',
        password:'',
        passwordError:"",
    };

    onInputChangeHandler=(e) =>{
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
          [e.target.name]: e.target.value
        });
    };

    validate =()=>{
        let isError= false;
        const errors ={
            firstNameError:'',
            lastNameError:'',
            userNameError:'',
            emailError:'',
            passwordError:''
        };
        if(this.state.userName.length <5){
            isError=true;
            errors.userNameError='Username needs to be atleast 5 charactes long';
        }
        if(this.state.email.indexOf("@") === -1){
            isError=true;
            errors.emailError='Requires valid email';
        }

        if(isError){
            this.setState({
                ...this.state,
                ...errors
            });
        }
        return isError;
    };

    onSubmit = (e)=>{
        e.preventDefault();

        //check for errors
        const err= this.validate();
        if(!err){
            //clear form
            this.setState({
                firstName:'',
                firstNameError:'',
                lastName:'',
                lastNameError:'',
                userName:'',
                userNameError:'',
                email:'',
                emailError:'',
                password:'',
                passwordError:""
            });
            this.props.onChange({
                firstName:'',
                lastName:'',
                userName:'',
                email:'',
                password:''
            });
        }
    };


    render(){

        const style = {
            margin: 12,
        };

        return(
          <form>

              <TextField
                  name="firstName"
                  hintText="First Name"
                  floatingLabelText="First Name"
                  value={this.state.firstName}
                  errorText={this.state.firstNameError}
                  onChange={this.onInputChangeHandler.bind(this)}/><br />

              <TextField
                  name="lastName"
                  hintText="Last Name"
                  floatingLabelText="Last Name"
                  value={this.state.lastName}
                  errorText={this.state.lastNameError}
                  onChange={this.onInputChangeHandler.bind(this)}/>
              <br/>

              <TextField
                  name="userName"
                  hintText="User Name"
                  floatingLabelText="User Name"
                  value={this.state.userName}
                  errorText={this.state.userNameError}
                  onChange={this.onInputChangeHandler.bind(this)}/>
              <br/>

              <TextField
                  name="email"
                  hintText="Email"
                  floatingLabelText="Email"
                  value={this.state.email}
                  errorText={this.state.emailError}
                  onChange={this.onInputChangeHandler.bind(this)}/>
              <br/>

              <TextField
                  name="password"
                  type="password"
                  hintText="Password"
                  floatingLabelText="Password"
                  value={this.state.password}
                  errorText={this.state.passwordError}
                  onChange={this.onInputChangeHandler.bind(this)}/>
              <br/>

              <RaisedButton
                  label="Submit"
                  primary={true}
                  style={style}
                  onClick={this.onSubmit.bind(this)} />
          </form>
        );
    }
}
export default Form;
