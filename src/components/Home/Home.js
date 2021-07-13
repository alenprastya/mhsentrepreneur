import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="jumbotrons homes home">
          <div class="container">
            <div class="image">
              <img src="/img/home.png" alt="" />
            </div>
            <div class="row">
              <h1 style={{ fontWeight: "700", textTransform: "uppercase" }}>
                Bangun Website Anda Bersama Kami
              </h1>
              <p className="text">
                Tidak Perlu Bingung lagi dalam mempromosikan Produk Unggulan
                Anda Kami dari mahasiswa Entrepreneur Mempunyai Solusi Untuk
                Menampilkan Produk anda dalam bentuk website, dengan Kualitas
                terjamin dan harga yang sangat terjangkau
              </p>
            </div>
          </div>
        </Jumbotron>
        <hr style={{ border: "1px solid black" }} />
      </div>
    );
  }
}
