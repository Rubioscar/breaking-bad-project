import React from "react";
import { Switch } from "react-router-dom";
import Header from "./header";

const Layout = ({ routes }) => (
  //   const loading = useSelector(state => state.common.loading);
  //   const dispatch = useDispatch();

  <>
    <Header />

    <div className="containerAplication">
      <Switch>{routes()}</Switch>
    </div>
  </>
);

export default Layout;
