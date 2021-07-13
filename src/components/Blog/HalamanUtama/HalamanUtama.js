import React, { Component } from "react";
import "./HalamanUtama.css";
import BuahDanSAyur from "../BuahDanSayur/BuahDanSAyur";
import { Media } from "react-bootstrap";
export default class HalamanUtama extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div class="mb-3" style={{ marginTop: "100px" }}>
            <label for="exampleFormControlInput1" class="form-label"></label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Cari . . ."
            />
          </div>
          <div
            id="carouselExampleIndicators"
            class="carousel slide "
            data-mdb-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-mdb-target="#carouselExampleIndicators"
                data-mdb-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-mdb-target="#carouselExampleIndicators"
                data-mdb-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-mdb-target="#carouselExampleIndicators"
                data-mdb-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  // style={{ width: "100%", height: "400px" }}
                  src="https://mdbootstrap.com/img/new/slides/041.jpg"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  // style={{ width: "100%", height: "400px" }}
                  src="https://mdbootstrap.com/img/new/slides/042.jpg"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  // style={{ width: "100%", height: "400px" }}
                  src="https://mdbootstrap.com/img/new/slides/043.jpg"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-mdb-target="#carouselExampleIndicators"
              data-mdb-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-mdb-target="#carouselExampleIndicators"
              data-mdb-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <BuahDanSAyur />
        </div>
      </div>
    );
  }
}
