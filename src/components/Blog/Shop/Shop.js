import React, { Component } from "react";
import './Shop.css'
import Ft from '../../Footers/Ft'
import { Link } from "react-router-dom";
export default class Shop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shops: [{
        judul: "Wordpress Themes",
        text: "Thousands of WordPress themes",
        image: "/img/Shop/wordpress.jpg"
      },
      {
        judul: "eCommerce Templates",
        text: "Beautiful website templates",
        image: "/img/Shop/ecommerce.jpeg"
      },
      {
        judul: "Site Templates",
        text: "HTML and website templates",
        image: "/img/Shop/siteHtml.jpeg"
      }
      ]
    };
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row shop mt-5">
            {this.state.shops.map((shop, index) => (
              <div className="col-md-4 mt-5" key={index}>
                <div className="card-body">
                  <Link to="/HtmlTemplate">
                    <a className="judul" href="">{shop.judul}</a>
                  </Link>
                  <p className="card-text text-center">{shop.text}</p>
                  <div className="text-center link">
                    <a href="">Newst</a>
                    <a href="">Best Seller</a>
                  </div>
                  <img src={shop.image} className="card-img-top img-shop" alt="..." />
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <hr style={{ marginTop: "130px" }} />
        <br />
        <Ft />
      </div>
    );
  }
}
