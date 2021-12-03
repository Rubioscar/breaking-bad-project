import React from "react";
import { Route } from "react-router-dom";

export default () => (
  <>
    <Route path="/list">Hola</Route>
    <Route path="/details/:id" exact>
      Adios
    </Route>
  </>
);
