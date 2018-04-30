import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from "./types";
import history from "../history";
const ROOT_URL = "http://localhost:3090";

export function signinUser({ email, password }) {
  return function(dispatch) {
    // submit email/ password to the server
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        //if request is good...
        // update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // save the JWT token
        localStorage.setItem("token", response.data.token);
        // redirect to the route '/feature'
        history.push("/feature");
      })
      .catch(() => {
        //if request is bad
        // show an error
        dispatch(authError("Bad Login Info"));
      });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem("token");
  return { type: UNAUTH_USER };
}
