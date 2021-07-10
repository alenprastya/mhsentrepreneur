import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import "./Layanan.css";
export default class Layanan extends Component {
  render() {
    return (
      <div id="layanan">
        <Jumbotron className="jumbotron-keterampilan">
          <div class="container">
            <h1 style={{ textAlign: "center", marginTop: "100px" }}>Layanan</h1>
            <div class="row baris">
              <div class="col-md-6" data-aos="fade-up">
                <img src="img/e-comerce.png" alt="" />
                <h3>Website E-Comerce</h3>
                <p>
                  Membantu Anda Membangun Website E-Comerce dari awal sampai
                  siap untuk digunakan sebagai Informasi Produk penjualan
                </p>
              </div>
              <div class="col-sm-6" data-aos="fade-up">
                <img src="img/landing-page.png" alt="" />
                <h3 className="mt-5">Landing Page</h3>
                <p>
                  Membangun Landing Page Maupun Portfilo dengan Harga yang
                  terjangkau dan kami pastikan sesuai dengan kebutuhan anda
                  dalam Pemabanguna Website
                </p>
              </div>
            </div>
            <div class="row baris">
              <div class="col-md-6" data-aos="fade-up">
                <img src="img/maintenace.png" alt="" />
                <h3 style={{ marginTop: "100px" }}>Maintenance Sistem</h3>
                <p>
                  Bagi Kamu Yang sudah Mempunyai Website, Tidak perlu Kawatir
                  dalam Proses maintenance Siistem, Karena kamu juga meyediakan
                  layananan tersebut, harganya sangat terjangkau, Mulai dari
                  Rp.50.000 Ribu Rupiah
                </p>
              </div>
              <div class="col-sm-6" data-aos="fade-up">
                <img src="img/belajar-koding.png" alt="" />
                <h3>Belajar Koding</h3>
                <p>
                  Bagi Kalian Yang ingin Membuat Website sendiri, Kami juga
                  membuka layanan untuk Kalian Yang ingin belajar membuat
                  Website Sendiri, dengan materi yang telah kami siapkan, anda
                  kami jamin tidak akan kesulitan dalam proses belajar
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
