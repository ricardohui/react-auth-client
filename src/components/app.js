import React, { Component } from "react";
import Header from "./header";
import { Route } from "react-router-dom";
import Signin from "./auth/signin";
import Signout from "./auth/signout";
import Signup from "./auth/signup";

export default class App extends Component {
  render() {
    return (
      <div>
        You are visiting <code>app</code> component.
        <Header />
        <Route path={`${this.props.match.url}/signin`} component={Signin} />
        <Route path={`${this.props.match.url}/signup`} component={Signup} />
        <Route path={`${this.props.match.url}/signout`} component={Signout} />
      </div>
    );
  }
}
