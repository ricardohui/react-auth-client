import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  renderLinks() {
    if (this.props.authenciated) {
      //show a link to sign out
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/signout">
            Sign Out
          </Link>
        </li>
      );
    } else {
      //show a link to sign in or sign up
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">
            Sign in
          </Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">
            Sign Up
          </Link>
        </li>
      ];
    }
  }
  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">
          Redux Auth
        </Link>
        <ul className="nav navbar-nav">{this.renderLinks}</ul>
        ---End of <code>header</code> component---
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return {
    authenciated: state.auth.authenicated
  };
}
export default connect(mapStateToProps)(Header);
