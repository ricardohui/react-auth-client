import { AUTH_USER, UNAUTH_USER } from "../actions/types";
export default (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenicated: true };
    case UNAUTH_USER:
      return { ...state, authenicated: false };
  }
  return state;
};
