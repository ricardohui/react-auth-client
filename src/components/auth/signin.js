import React, { Component } from "react";
import { reduxForm } from "redux-form";
import * as actions from "../../actions";
import auth_reducer from "../../reducers/auth_reducer";
class Signin extends Component {
  handleFormSubmit({ email, password }) {
    // console.log(email, password);

    this.props.signinUser({ email, password });
  }

  rednerAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong>
          {this.props.errorMessage}
        </div>
      );
    }
  }
  render() {
    const {
      handleSubmit,
      fields: { email, password }
    } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        You are visiting <code>signin</code> component.
        <fieldset className="form-group">
          <label>Email:</label>
          <input {...email} className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input {...password} type="password" className="form-control" />
        </fieldset>
        {this.rednerAlert()}
        <button action="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    );
  }
}
function mapStateToProps(state) {
  return { errorMessage: state.auth_reducer.error };
}

export default reduxForm(
  { form: "signin", fields: ["email", "password"] },
  mapStateToProps,
  actions
)(Signin);
