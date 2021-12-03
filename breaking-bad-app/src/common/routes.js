import React from "react";
import { Route, Redirect } from "react-router-dom";
import ListPage from "./pages/listPage";
import DetailsPage from "./pages/detailsPage";
import ErrorPage from "./pages/errorPage";

export default () => (
  <>
    <Route path="/list" component={ListPage} />

    <Route path="/details/:id" component={DetailsPage} />

    <Route path="/error" component={ErrorPage} />

    <Route exact path="/">
      <Redirect to="/list" />
    </Route>
  </>
);
