import React from "react";
// import { NavLink } from "react-router-dom";
import Sdata from "./Sdata";
import Card from "./Card";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <div>
          <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto align-items-center my-4">
              {/* <div className="row "> */}
              {/* <div className="col-10 col-md-4 mx-auto "></div> */}

              {Sdata.map((val, ind) => {
                return (
                  <div className="gy-4col-lg-3 col-md-2 col-sm-1  ">
                    <Card imgsrc={val.imgsrc} title={val.title} />;
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Service;
