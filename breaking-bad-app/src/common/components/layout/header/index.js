import "scss/header.scss";
import React from "react";
import history from "common/helper/history";
// import BreadCrumbs from "@/common/components/breadCrumbs";
// import NotificationIcon from "./notificationIcon";

const Header = React.memo(() => (
  <div className="header">
    <nav className="">
      <div className="boxlogotitle">
        <div
          className="redirect"
          onClick={() => history.push("/userworkspace/view")}
        >
          Test Project
        </div>
        {/* <BreadCrumbs /> */}
      </div>

      <div className="boxMenuUser">
        <div className="menuUser">{/* <NotificationIcon /> */}</div>
      </div>
    </nav>
  </div>
));

export default Header;
