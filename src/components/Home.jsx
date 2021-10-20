import React from "react";
import web from "./img1.jpg";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Bussiness With"
        btname="contact us"
        imgsrc={web}
        visit="/about"
      />
    </>
  );
};

export default Home;
