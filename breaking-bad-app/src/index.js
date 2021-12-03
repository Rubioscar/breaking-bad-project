import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import "./scss/index.scss";
import Layout from "./common/components/layout";
import history from "./common/helper/history";
import store from "./store";
import reportWebVitals from "./reportWebVitals";

const appRoutes = () => <>Nada</>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Layout routes={appRoutes} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
