import React from "react";
import "./App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Error from "./components/ErrorPage";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Service} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/search" component={Search} />
          <Route component={Error} />

          {/* <Redirect to="/" /> */}
        </Switch>
        <Footer />
      </div>
    </>
  );
};

export default App;
