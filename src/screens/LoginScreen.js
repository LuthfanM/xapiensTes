import React, { Component } from 'react';
import LoginService from '../helpers/services/LoginService';

class LoginScreen extends Component {
    constructor(props)
    {
      super(props);
      
      this.state = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      }
    }

    handleSubmit = async e => {
      e.preventDefault();
      const {email, password} = this.state;
      const credential = {email, password}
      const token = await LoginService(credential);
      // alert("tok "+JSON.stringify(token));
      this.props.setToken(token);
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Email :
            <input value={this.state.email} onChange={evt=>this.setState({email : evt.target.value})} />
          </label>
          <label>
            Password :
            <input value={this.state.password} onChange={evt=>this.setState({password: evt.target.value})} />
          </label>
          <input type="submit" value="Login" />
        </form>
      );
    }
  }

export default LoginScreen;