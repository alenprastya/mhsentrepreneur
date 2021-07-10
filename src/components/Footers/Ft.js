import React, { Component } from 'react'
import './Ft.css'

export default class Ft extends Component {
    render() {
        return (
            <div id="kontak">
                <footer className="text-center text-lg-start bg-light text-muted">
                <div class="container">
                <footer className="bg-light text-center text-white">
          <div className="container p-4 pb-0 ">
            <section className="mb-4 ">
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

          
        </footer>
                    <div class="row mt-5 mb-5" >
                        <div class="col-md-6">
                        <h6 class="text-uppercase fw-bold mb-4">
                            <i class="fas fa-gem me-3"></i><strong>Mahasiswa Enterpreneur</strong>
                            </h6>
                            <h5 style={{textAlign:"justify",lineHeight:"1.6"}}>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, doloremque hic? Fugit accusamus rerum illo natus, minus consequuntur sequi? Veniam, molestiae neque odit eos magnam omnis accusamus tempora qui laborum!
                            </h5>
                        </div>
                        <div class="col-md-5 ml-5 " style={{margin:"0 auto"}}>
                            <h6 class="text-uppercase fw-bold mb-4">
                               <strong>Kontak</strong>
                            </h6>
                                <p> <i class="fas fa-home me-3"></i>Jakarta Timur, Indonesia</p>
                                <p> <i class="fas fa-envelope me-3"></i>
                                alenprastya@gmail.com</p>
                                <p><i class="fas fa-phone me-3"></i>0857-1957-8195</p>
                                <p><i class="fas fa-print me-3"></i>021-800-8022</p>
                        </div>
                    </div>
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
        )
    }
}
