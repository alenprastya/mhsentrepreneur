import React, { Component } from "react";

export default class Footers extends Component {
  render() {
    return (
      <div id="footer">
        <footer className="bg-light text-center text-white">
          <div className="container p-4 pb-0">
            <section className="mb-4">
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="https://www.facebook.com/alen.prastya.5"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="https://www.instagram.com/alenprastyaa/"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#25d366" }}
                href="https://api.whatsapp.com/send?phone=6285719578195"
                role="button"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <a style={{ color: "black" }} href="https://mdbootstrap.com/">
              © 2021 Copyright alen Prastya
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
