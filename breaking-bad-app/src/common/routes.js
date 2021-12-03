import React from "react";
import { Route } from "react-router-dom";
import ListPage from "./components/pages/listPage";
import DetailsPage from "./components/pages/detailsPage";

export default () => (
  <>
    <Route path="/list">
      <ListPage />
    </Route>
    <Route path="/details/:id" exact>
      <DetailsPage />
    </Route>
  </>
);
