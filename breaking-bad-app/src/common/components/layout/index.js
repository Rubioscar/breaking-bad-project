import React from "react";
import { Switch } from "react-router-dom";
import Routes from "common/routes";
import Header from "./header";

const Layout = () => (
  //   const loading = useSelector(state => state.common.loading);
  //   const dispatch = useDispatch();

  <>
    <Header />

    <div className="containerAplication">
      <Switch>
        <Routes />
      </Switch>
    </div>
  </>
);

export default Layout;
