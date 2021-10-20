import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <section className=" d-flex align-items-center">
        <div className="container-fluid ">
          <div className="  row">
            <div className="col-10 mx-auto">
              <div className="row header">
                <div className="col-lg-6 order-1 order-lg-2 justify-content-center">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home image"
                    width="500px"
                  />
                </div>

                <div className=" col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name">
                      <br /> k-world
                    </strong>
                  </h1>

                  <div className=" justify-content-center ">
                    <h2>we are the team of talented developers</h2>
                    <div>
                      <NavLink className="btn-get-Started " to="{props.visit}">
                        {props.btname}
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
