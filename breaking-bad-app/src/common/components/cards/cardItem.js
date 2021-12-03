import React from "react";
// import BreadCrumbs from "@/common/components/breadCrumbs";
// import NotificationIcon from "./notificationIcon";

const CardItem = React.memo(() => (
  <div className="card_item">
    <div className="card_inner">
      <div className="role_name">Nombre</div>
      <div className="real_name">SurName</div>
      <div className="film">
        Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className="overlay">
        <a href={`/details/${1}`} className="buy-btn">
          View Details
        </a>
      </div>
    </div>
  </div>
));

export default CardItem;
