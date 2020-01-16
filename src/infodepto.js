import React from "react";
import "./main.css";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";

class InfoDepto extends React.Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <div className="paper bgdptoinfo">
          <Navbar />
          <div className="row">
            <div className="col-md-8" />
            <div className="col-md-3 ">
              <div className="row ">
                <h4>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  Se entrega un listado de deptos segun las preferencias del
                  usuario
                  <br />
                  <br />
                </h4>

                <button type="button" className="buttonn">
                  <a
                    className="a"
                    href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=359224384-a52833bf-90e2-4ee8-a471-85087ccc0c0c"
                  >
                    Comprar
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default InfoDepto;
