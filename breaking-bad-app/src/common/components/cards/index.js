import "scss/listCards.scss";
import React from "react";
import CardItem from "common/components/cards/cardItem";
// import BreadCrumbs from "@/common/components/breadCrumbs";
// import NotificationIcon from "./notificationIcon";

const ListCards = React.memo(({ listProducts }) => (
  <div className="cards_wrap">
    {listProducts.map((e, index) => (
      <CardItem data={e} key={index} />
    ))}
  </div>
));

export default ListCards;
