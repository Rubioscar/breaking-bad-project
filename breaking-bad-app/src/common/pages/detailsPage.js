import "scss/details.scss";
import React, { useEffect, useState } from "react";
import DetailsTable from "common/components/tables/detailsTable";
import { api } from "common/api";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading } from "common/actions/loading";
import { addBreadCrumb } from "common/actions/breadCrumbs";
import { toast } from "react-toastify";
import { FormattedMessage } from "react-intl";

const DetailsPage = React.memo(({ location }) => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [character, setCharacter] = useState(null);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    dispatch(setLoading(true));
    const apiCalls = [];
    apiCalls.push(
      api.details(id).then((resp) => {
        setCharacter(resp.data[0]);
      })
    );

    apiCalls.push(
      api.quote(location.state).then((resp) => {
        setQuote(resp.data[0]);
      })
    );

    Promise.all(apiCalls)
      .catch(() => {
        toast.error(
          <FormattedMessage id="error" defaultMessage="Data fetch error" />
        );
        history.push("/error");
      })
      .finally(() => dispatch(setLoading(false)));
  }, [dispatch, history, id, location.state]);

  useEffect(() => {
    dispatch(
      addBreadCrumb({
        title: `Details ${location.state}`,
        path: `/details/${id}`,
      })
    );
  }, [dispatch, id, location.state]);

  return (
    <>
      <div className="container">
        <div className="image">
          <img src={character?.img} alt="product" />
        </div>
        <div className="info">
          <div className="text">
            <h2>{quote?.quote}</h2>
          </div>
          <div className="details">
            <DetailsTable details={character} />
          </div>
        </div>
      </div>
    </>
  );
});

export default DetailsPage;
