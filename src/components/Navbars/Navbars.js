import React, { Component } from "react";
import "./Navbars.css";
import { Link } from "react-router-dom";

export default class Navbars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      head: "Mahasiswa Entrepreneur",
    };
  }

  render() {
    const { head } = this.state;
    return (
      <div id="home">
        <nav className="navbar navbar-expand-lg  navi fixed-top ">
          <div className="container">
            <Link to="/">
              <button
                className="navbar-brand"
                style={{
                  color: "black",
                  margin: "0",
                  fontWeight: "700",
                  fontSize: "25px",
                }}
                href="home"
              >
                {head}
              </button>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icons">
                <img src="/menu.png" alt="" />
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {/* <li className="nav-item">
                  <Scroll delay={0} to="layanan">
                    <button style={{ fontWeight: "700", fontSize: "23px" }}>
                      Layanan
                    </button>
                  </Scroll>
                </li>
                <li className="nav-item">
                  <Scroll to="portfolio">
                    <button style={{ fontWeight: "700", fontSize: "23px" }}>
                      Portfolio
                    </button>
                  </Scroll>
                </li>
                <li className="nav-item">
                  <Scroll delay={0} to="kontak">
                    <button style={{ fontWeight: "700", fontSize: "23px" }}>
                      Kontak
                    </button>
                  </Scroll>
                </li> */}
                <li className="nav-item">
                  <Link to="/halamanutama">
                    <button style={{ fontWeight: "700", fontSize: "23px" }}>
                      Blog
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/halamantutorial">
                    <button style={{ fontWeight: "700", fontSize: "23px" }}>
                      Tutorial
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/shop">
                    <button style={{ fontWeight: "700", fontSize: "23px" }}>
                      Shop
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
