import React, { Component } from "react";
import { Jumbotron, Card, Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import "./Portfolio.css";

export default class Portfolio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      port: [{
        link: "http://alenitsi.vphs.top/Renita/",
        img: "/img/port1.png"
      },
      {

        link: "http://alenitsi.vphs.top/React-js/Material-Ui/",
        img: "/img/port2.png"
      },
      {

        link: "http://alenitsi.vphs.top/PORTFOLIO/Membuat%20Website%20COMPANY%20PROFILE%20menggunakan%20MATERIALIZE/Company%20Profil/",
        img: "/img/port3.png"
      },
      {
        link: "http://alenitsi.vphs.top/franchise/",
        img: "/img/port5.png"
      },
      {
        link: "http://alenitsi.vphs.top/PORTFOLIO/Design-furniture-store/",
        img: "/img/port6.png"
      },
      {
        link: "http://alenitsi.vphs.top/bloganime/",
        img: "/img/port8.png"
      }
      ]

    };
  };

  render() {
    const { port } = this.state
    return (
      <div>
        <Jumbotron className="jumbotrons" id="portfolio">
          <div>
            <hr />
            <BrowserRouter>
              <Container>
                <h2 style={{ fontWeight: "700" }}>PORTFOLIO</h2>
                <div className="row mb-5">
                  {port.map((ports) => (
                    <div className="col-sm-4 mb-5" data-aos="fade-up">
                      <Card className="kartu">
                        <a href={ports.link}>
                          <Card.Img
                            className="images"
                            variant="top"
                            src={ports.img}
                          />
                        </a>
                        <br />
                      </Card>
                    </div>
                  ))}
                </div>
                <Scroll smooth={true} to="home">
                  <i class="bi bi-arrow-up-square"></i>
                </Scroll>
              </Container>
            </BrowserRouter>
          </div>
        </Jumbotron>
      </div >
    );
  }
}
