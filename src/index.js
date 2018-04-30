import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import history from "./history";
import reduxThunk from "redux-thunk";
import App from "./components/app";
import reducers from "./reducers";
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <Router history={history}>
      <Route path="/app" component={App} />
    </Router>
  </Provider>,
  document.querySelector(".container")
);
