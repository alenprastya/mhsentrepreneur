import React, { Component } from "react";
import "./Ft.css";

export default class Ft extends Component {
  render() {
    return (
      <div id="kontak">
        <footer className="text-center text-lg-start bg-light text-muted">
          <div class="container">
            <footer className="bg-light text-center text-white">
              <div className="container p-4 pb-0 ">
                <section className="mb-4" style={{ display: "float", justifyContent: "center" }}>
                  <a
                    className="icons btn btn-primary btn-floating "
                    style={{ backgroundColor: "#3b5998" }}
                    href="https://www.facebook.com/alen.prastya.5"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a
                    className="icons btn btn-primary btn-floating "
                    style={{ backgroundColor: "#ac2bac", marginLeft: "30px" }}
                    href="https://www.instagram.com/alenprastyaa/"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="icons btn btn-primary btn-floating "
                    style={{ backgroundColor: "#25d366", marginLeft: "30px" }}
                    href="https://api.whatsapp.com/send?phone=6285719578195"
                    role="button"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </section>
              </div>
            </footer>
            <div className="row mt-5 mb-5">
              <div className="col-md-4">
                <h6 className="text-uppercase fw-bold mb-4 text-center">
                  <i className="fas fa-gem me-3"></i>
                  <strong className="text-center">Mahasiswa Enterpreneur</strong>
                </h6>
                <h5
                  style={{
                    textAlign: "justify",
                    lineHeight: "1.6",
                    fontSize: "16px",
                  }}
                >
                  Kami adalah penyedia Layanan jasa pembuatan Website, dari
                  mulai web Landing page sampai Web E-commerce, layanan kami
                  sangat menarik, kami berusaha secepat mungkin dalam proses
                  pengerjaan, tentunya dengan tingkat kesulitan dari permintaan
                  Client, Selain itu kami juga menawarkan harga yang sangat
                  miring, hanya dengan uang 200 Rb kamu sudah mempunyai Webasite
                  Sendiri
                </h5>
                <br />
              </div>
              <div
                className="col-md-4 ml-5 "
                style={{ margin: "0 auto", fontSize: "18px" }}>
                <h6 className="text-uppercase fw-bold mb-4 text-center">
                  <strong>Kontak</strong>
                </h6>
                <p className="kontak">
                  {" "}
                  <i className="fas fa-home me-3"></i>Jakarta Timur, Indonesia
                </p>
                <p className="kontak">
                  {" "}
                  <i className="fas fa-envelope me-3"></i>
                  alenprastya@gmail.com
                </p>
                <p className="kontak">
                  <i className="fas fa-phone me-3"></i>0857-1957-8195
                </p>
                <p className="kontak">
                  <i className="fas fa-print me-3"></i>021-800-8022
                </p>
              </div>
              <div className="col-md-3">
                <h6>
                  <strong > IKLAN</strong>
                </h6>
                <iframe
                  src="/video/Final Website Iklan.mp4"
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <a style={{ color: "black" }} href="https://mdbootstrap.com/">
              © 2021 Copyright alen Prastyaa
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
