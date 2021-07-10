import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="jumbotrons">
          <div class="container">
            <div class="image">
              <img src="/img/page-icon.png" alt="" />
            </div>
            <div class="row">
              <h1>Bangun Website Anda Bersama Kami</h1>
              <p></p>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
