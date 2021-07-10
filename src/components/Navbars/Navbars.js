import React, { Component } from "react";
import { Link as Scroll } from "react-scroll";
import "./Navbars.css";

export default class Navbars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      head: "Mahasiswa Enterpreneur",
    };
  }

  render() {
    const { head } = this.state;
    return (
      <div id="home">
        <nav className="navbar navbar-expand-lg  navi fixed-top ">
          <div class="container">
            <Scroll to="home">
              <a
                className="navbar-brand"
                style={{ color: "white", margin: "0" }}
                href="home"
              >
                {head}
              </a>
            </Scroll>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icons">
                <img src="/menu.png" alt="" />
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Scroll delay={0} to="layanan">
                    <button>Layanan</button>
                  </Scroll>
                </li>
                <li className="nav-item">
                  <Scroll to="portfolio">
                    <button>Portfolio</button>
                  </Scroll>
                </li>
                <li className="nav-item">
                  <Scroll delay={0} to="kontak">
                    <button>Kontak</button>
                  </Scroll>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
