import React from "react";
import "./main.css";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";

class InfoCiere extends React.Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <div className="paper bgcierreinfo">
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
                  Te acompañamos desde el proceso de selección, las visitas,
                  hasta el cierre del trato
                  <br />
                  <br />
                </h4>

                <button type="button" className="buttonn">
                  <a
                    className="a"
                    href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=359224384-03201b38-43f8-41e2-9965-2e174e76d016"
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

export default InfoCiere;
