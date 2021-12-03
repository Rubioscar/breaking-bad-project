import "scss/header.scss";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import BreadCrumbs from "common/components/breadCrumbs";
import LanguageContext from "common/context/language";

const Header = React.memo(() => {
  const history = useHistory();
  const { locale, setLocale } = useContext(LanguageContext);
  return (
    <div className="header">
      <nav className="nav">
        <div className="boxlogotitle">
          <div className="title" onClick={() => history.push("/list")}>
            Breaking Bad App
          </div>
          <BreadCrumbs />
        </div>

        <div className="language">
          <span
            onClick={() => setLocale("en")}
            className={locale === "en" ? "active" : ""}
          >
            en
          </span>
          <span
            onClick={() => setLocale("es")}
            className={locale === "es" ? "active" : ""}
          >
            es
          </span>
        </div>
      </nav>
    </div>
  );
});

export default Header;
