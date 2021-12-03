import React, { useEffect, useState } from "react";
import { api } from "common/api";
import ListCards from "common/components/cards";
import { useDispatch } from "react-redux";
import { setLoading } from "common/actions/loading";
import { addBreadCrumb } from "common/actions/breadCrumbs";
import { toast } from "react-toastify";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";

const ListPage = React.memo(() => {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    api
      .list()
      .then((resp) => {
        setProducts(resp.data);
      })
      .catch(() => {
        toast.error(
          <FormattedMessage id="error" defaultMessage="Data fetch error" />
        );
        history.push("/error");
      })
      .finally(() => dispatch(setLoading(false)));
  }, [dispatch, history]);

  useEffect(() => {
    dispatch(
      addBreadCrumb({
        title: `List`,
        path: `/list`,
      })
    );
  }, [dispatch]);

  return (
    <>
      <ListCards listProducts={products} />
    </>
  );
});

export default ListPage;
