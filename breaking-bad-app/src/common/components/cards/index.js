import "scss/listCards.scss";
import React, { useState } from "react";
import Pagination from "common/components/pagination";
import CardItem from "common/components/cards/cardItem";

const ListCards = React.memo(({ listProducts }) => {
  const [list, setList] = useState([]);
  return (
    <>
      <div className="cards_wrap">
        {list.map((e, index) => (
          <CardItem data={e} key={index} />
        ))}
      </div>
      <Pagination data={listProducts} countPage={8} changeList={setList} />
    </>
  );
});

export default ListCards;
