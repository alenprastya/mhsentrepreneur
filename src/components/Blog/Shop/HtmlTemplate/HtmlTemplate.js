import React, { useState } from 'react'

const HtmlTemplate = () => {

    const [landingPage, setLandingPage] = useState(
        [{
            title: "Simple E-Commerce  Site",
            by: "alen Prastya",
            harga: "2.200.000",
            linkPriview: "",
            linkShop: "",
            image: "/img/Shop/SiteHTML/port1.png"
        },

        {
            title: "Landing Page Profesional",
            by: "alen Prastya",
            harga: "1.200.000",
            linkPriview: "",
            linkShop: "",
            image: "/img/Shop/SiteHTML/port3.png"
        },
        {
            title: "Simple Web Blog",
            by: "alen Prastya",
            harga: "800.000",
            linkPriview: "",
            linkShop: "",
            image: "/img/Shop/SiteHTML/port8.png"
        },
        {
            title: "Beaufifull Landing Page",
            by: "alen Prastya",
            harga: "1.000.000",
            linkPriview: "",
            linkShop: "",
            image: "/img/Shop/SiteHTML/port4.png"
        },
        ]
    )
    console.log(landingPage)



    return (
        <div>
            <form >
                <div className="container">
                    <div className="row" style={{ marginTop: "150px" }}>
                        {landingPage.map((land, index) => {
                            return (
                                <div className="col-md-3" key={index}>
                                    <div className="card" >
                                        <img src={land.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p style={title} >{land.title}</p>
                                            <p style={by}>by {land.by}</p>
                                            <p style={harga}>Rp. {land.harga}</p>
                                            <div style={iconDanPriview} >
                                                <a href={land.linkPriview} style={priview} >Preview</a>
                                                <a href={land.linkShop} style={icons} className="fab fa-whatsapp"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div style={card2}>
                        <h4 style={{ marginTop: "100px", textAlign: "center", padding: "10px", }}>List Pembelian</h4>
                        <p>Name</p>
                        <label htmlFor="">Alen</label>
                        <hr />
                        <p>Harga</p>
                        <label htmlFor="">Rp. </label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default HtmlTemplate


const title = {
    fontSize: "17px",
    fontWeight: "700",
    marginTop: "10px"
}
const by = {
    fontSize: "15px",
    marginTop: "-20px",
    color: "rgb(143, 143, 143)"
}
const priview = {
    border: "1.5px solid green",
    padding: "5px",
    borderRadius: "5px",
    color: "black"
}
const icons = {
    border: "1px solid green",
    borderRadius: "5px",
    marginLeft: "10px",
    color: "black",
    padding: "9px",
    color: "green",
}
const iconDanPriview = {
    textAlign: "right"
}

const harga = {
    fontSize: "15px",
    fontWeight: "700",
    marginTop: "-10px"
}
const wa = {

}

const card2 = {
    width: "300px",
    boxShadow: "1px 1px 10px 1px",
    padding: "0 15px",

}