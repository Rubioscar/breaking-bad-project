import React, { useState } from "react";
import { Switch } from "react-router-dom";
import Routes from "common/routes";
import { useSelector } from "react-redux";
import Loading from "common/components/loading";
import { IntlProvider } from "react-intl";
import translations from "translations";
import LanguageContext from "common/context/language";
import { ToastContainer } from "react-toastify";
import Header from "./header";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  const [locale, setLocale] = useState("en");
  const loading = useSelector((state) => state.loading);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={translations[locale]}>
        <Header />

        {loading && <Loading />}

        <div className="containerAplication">
          <Switch>
            <Routes />
          </Switch>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default Layout;
