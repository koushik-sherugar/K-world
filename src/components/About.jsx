import React from "react";
import web from "./logo1.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common
        name="welcome to"
        btname="contact us"
        imgsrc={web}
        visit="/about"
      />
    </>
  );
};

export default About;
