import React, { Component } from "react";
import "./BuahDanSayur.css";
export default class BuahDanSAyur extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blog: [
        {
          id: "1",
          judul: "7 Jenis Diet Mudah dan Efektif yang Bisa Kamu Coba",
          tanggal: "Alen Prastya, 12 Juli 2021",
          image: "https://mdbootstrap.com/img/new/standard/nature/184.jpg",
        },
        {
          id: "2",
          judul: "Kandungan, Manfaat, dan Olahan Daun Mint Detoks  Ampuh!",
          tanggal: "Alen Prastya, 12 Juli 2021",
          image: "https://mdbootstrap.com/img/new/standard/nature/111.jpg",
        },
        {
          id: "3",
          judul:
            "Kandungan dan Manfaat Jeruk Nipis, Bisa Turunkan Risiko Kanker!",
          tanggal: "Deril Setiawan, 14 Juli 2021",
          image: "https://mdbootstrap.com/img/new/standard/nature/182.jpg",
        },
      ],
    };
  }

  render() {
    const { blog } = this.state;
    return (
      <div>
        <div class="row">
          {blog.map((blogs) => (
            <div class="col-md-4">
              <div class="card">
                <a
                  style={{ color: "black" }}
                  href="https://mdbootstrap.com/docs/standard/components/cards/"
                >
                  <img
                    src={blogs.image}
                    class="card-img-top"
                    alt="..."
                    style={{ height: "240px" }}
                  />

                  <div class="card-body" style={{ marginLeft: "-12px" }}>
                    <strong>
                      <h4 style={{ fontWeight: "700" }}>{blogs.judul}</h4>
                    </strong>
                    <p class="card-text" style={{ fontSize: "15px" }}>
                      {blogs.tanggal}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
