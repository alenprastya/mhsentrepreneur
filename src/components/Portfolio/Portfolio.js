import React, { Component } from "react";
import { Jumbotron, Card, Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import "./Portfolio.css";
import axios from "axios";
const API = "http://localhost:3004/posts";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      port: [],
    };
  }

  componentDidMount() {
    axios.get(API).then((response) => {
      console.log(response);
      this.setState({
        port: response.data,
      });
    });
  }
  render() {
    return (
      <div>
        <Jumbotron className="jumbotrons" id="portfolio">
          <div>
            <hr />
            <BrowserRouter>
              <Container>
                <h1>PORTFOLIO</h1>
                <div className="row mb-5">
                  <div className="col-sm-3 mb-5" data-aos="fade-up">
                    <Card className="kartu">
                      <a href="http://alenitsi.vphs.top/Renita/">
                        <Card.Img
                          className="images"
                          variant="top"
                          src="img/port1.png"
                        />
                      </a>
                      <br />
                    </Card>
                  </div>
                  <div className="col-sm-3 mb-5" data-aos="fade-up">
                    <Card className="kartu">
                      <a
                        className="App-link"
                        href="http://alenitsi.vphs.top/React-js/Material-Ui/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Card.Img
                          className="images"
                          variant="top"
                          src="img/port2.png"
                        />
                      </a>
                      <br />
                    </Card>
                  </div>
                  <div className="col-sm-3 mb-5" data-aos="fade-up">
                    <Card className="kartu">
                      <a
                        className="App-link"
                        href="http://alenitsi.vphs.top/PORTFOLIO/Membuat%20Website%20COMPANY%20PROFILE%20menggunakan%20MATERIALIZE/Company%20Profil/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Card.Img
                          className="images"
                          variant="top"
                          src="img/port3.png"
                        />
                      </a>
                      <br />
                    </Card>
                  </div>
                  <div className="col-sm-3 mb-5" data-aos="fade-up">
                    <Card className="kartu">
                      <a
                        className="App-link"
                        href="http://alenitsi.vphs.top/MDB%20Bootsrtap/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Card.Img
                          className="images"
                          variant="top"
                          src="img/port4.png"
                        />
                      </a>
                      <br />
                    </Card>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-4 mb-5" data-aos="fade-up">
                    <Card className="kartu">
                      <Card.Img
                        className="images"
                        variant="top"
                        src="img/port5.png"
                      />
                      <br />
                    </Card>
                  </div>
                  <div className="col-sm-4 mb-5" data-aos="fade-up">
                    <Card className="kartu">
                      <a
                        className="App-link"
                        href="http://alenitsi.vphs.top/franchise/form_Login/login.php"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Card.Img
                          className="images"
                          variant="top"
                          src="img/port7.png"
                        />
                      </a>
                      <br />
                    </Card>
                  </div>
                  <div className="col-sm-4 mb-5 " data-aos="fade-up">
                    <Card className="kartu">
                      <a
                        className="App-link"
                        href="http://alenitsi.vphs.top/bloganime/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Card.Img
                          className="images"
                          variant="top"
                          src="img/port8.png"
                        />
                      </a>
                      <br />
                    </Card>
                  </div>
                </div>
                <Scroll smooth={true} to="home">
                  <i class="bi bi-arrow-up-square"></i>
                </Scroll>
              </Container>
            </BrowserRouter>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
