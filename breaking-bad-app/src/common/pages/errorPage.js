import React from "react";
import { FormattedMessage } from "react-intl";
import "scss/error.scss";

const ErrorPage = React.memo(() => (
  <section>
    <header>
      <h1>
        <FormattedMessage id="error" defaultMessage="Data fetch error" />
      </h1>
    </header>
  </section>
));

export default ErrorPage;
