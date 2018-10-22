import "babel-regenerator-runtime";
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';

// components
import LoginForm from "./component/login-form";
import PlanetSearchForm from "./component/planet-search";

const store = createStore(rootReducer, applyMiddleware(createLogger(), thunk));

// window.setTimeout(() => {
//   store.dispatch(searchSuccess(planets));
// }, 2000);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route exact path="/" component={LoginForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/search" component={PlanetSearchForm} />
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
