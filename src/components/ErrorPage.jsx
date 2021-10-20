import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const ErrorPage = () => {
  return (
    <>
      <div className="mx-auto">
        <h1>404 Page Not Found</h1>
        <h6>Please click the below buttonto go back to homepage</h6>
        <NavLink to="/">
          <button className="btn-get-Started"> go back</button>
        </NavLink>
      </div>
    </>
  );
};

export default ErrorPage;
