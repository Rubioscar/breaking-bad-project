import React from "react";
// import history from "common/helper/history";
import ListCards from "common/components/cards";
// import BreadCrumbs from "@/common/components/breadCrumbs";
// import NotificationIcon from "./notificationIcon";

const ListPage = React.memo(() => (
  <ListCards listProducts={Array.from({ length: 4 })} />
));

export default ListPage;
