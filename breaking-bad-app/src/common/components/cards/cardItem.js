import React from "react";
import { useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const CardItem = React.memo(({ data }) => {
  const history = useHistory();

  return (
    <div className="card_item">
      <div className="card_inner">
        <img src={data.img} alt="product" />
        <div className="real_name">{data.name}</div>
        <div className="role_name">
          <FormattedMessage id="nickname" defaultMessage="Nickname" />{" "}
          {data.nickname}
        </div>
        <div className="overlay">
          <>
            <button
              type="submit"
              className="buy-btn"
              onClick={() =>
                history.push(`/details/${data.char_id}`, data.name)
              }
            >
              View Details
            </button>
          </>
        </div>
      </div>
    </div>
  );
});

export default CardItem;
