import React, { Component } from "react";
import Home from "../Home/Home";
import Layanan from "../Layanan/Layanan";
import Portfolio from "../Portfolio/Portfolio";
import Ft from "../Footers/Ft";
export default class HomeWeb extends Component {
  render() {
    return (
      <div id="/">
        <Home />
        <Layanan />
        <Portfolio />
        <Ft />
      </div>
    );
  }
}
