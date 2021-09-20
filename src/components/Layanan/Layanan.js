import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import "./Layanan.css";
export default class Layanan extends Component {

  constructor(props) {
    super(props)

    this.state = {
      layanan1: [
        {
          judul: "Website E-Comerce",
          text: "Membantu Anda Membangun Website E-Comerce dari awal sampai siap untuk digunakan sebagai Informasi Produk penjualan.",
          image: "img/layanan/e-comerce.png"
        },
        {
          judul: "Landing Page",
          text: "Membangun Landing Page Maupun Portfilo dengan Harga yang terjangkau dan kami pastikan sesuai dengan kebutuhan anda dalam Pemabanguna Website",
          image: "img/layanan/landing-page.png"
        },

      ],

      layanan2: [
        {
          judul: "Maintenance Sistem",
          text: "Bagi Kamu Yang sudah Mempunyai Website, Tidak perlu Kawatir dalam Proses maintenance Siistem, Karena kamu juga meyediakan layananan tersebut, harganya sangat terjangkau, Mulai dari Rp.50.000 Ribu Rupiah",
          image: "img/layanan/maintenace.png"
        },
        {
          judul: "Belajar Koding",
          text: "Bagi Kalian Yang ingin Membuat Website sendiri, Kami juga membuka layanan untuk Kalian Yang ingin belajar membuat Website Sendiri, dengan materi yang telah kami siapkan, anda nkami jamin tidak akan kesulitan dalam proses belajar",
          image: "img/layanan/belajar-koding.png"
        }

      ]
    };
  };


  render() {
    const { layanan1, layanan2 } = this.state
    return (
      <div id="layanan">
        <Jumbotron className="jumbotron-keterampilan">
          <div class="container">
            <h2
              style={{
                textAlign: "center",
                marginTop: "100px",
                fontWeight: "700",
              }}
            >
              LAYANAN
            </h2>
            <div class="row baris">
              {layanan1.map((layanan1s) => (
                <div class="col-md-6" data-aos="fade-up">
                  <img src={layanan1s.image} alt="" />
                  <h3>{layanan1s.judul}</h3>
                  <p className="layanan">
                    {layanan1s.text}
                  </p>
                </div>
              ))}
            </div>
            <div class="row baris">
              {layanan2.map((layanans2) => (
                <div class="col-md-6" data-aos="fade-up">
                  <img src={layanans2.image} alt="" />
                  <h3 style={{ marginTop: "100px" }}>{layanans2.judul}</h3>
                  <p className="layanan">
                    {layanans2.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
