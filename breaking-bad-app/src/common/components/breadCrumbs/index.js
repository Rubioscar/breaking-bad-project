import "scss/breadCrumbs.scss";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BreadCrumbs = () => {
  const breadCrumbs = useSelector((state) => state.breadCrumbs);

  return (
    <div className="breadCrumbs">
      {breadCrumbs.map((breadCrumb, index) => (
        <div key={index} className="breadCrumbDiv">
          {index !== 0 ? (
            <span className="breadCrumbSeparator">&nbsp;&gt;&nbsp;</span>
          ) : null}
          <div
            className={`breadCrumbElement ${
              index === breadCrumbs.length - 1 ? "elementSelected" : ""
            }`}
          >
            {index !== breadCrumbs.length - 1 ? (
              <Link to={breadCrumb.path} className="titleHeader ">
                <span>{breadCrumb.title}</span>
              </Link>
            ) : (
              <span className="titleHeader">{breadCrumb.title}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
