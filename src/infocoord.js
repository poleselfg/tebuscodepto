import React from "react";
import "./main.css";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";

class InfoCoord extends React.Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <div className="paper bgcoordinfo">
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
                  Se envia un listado de dptos y en base a las prefrerencias del
                  usuario se generan hasta 5 visitas
                  <br />
                  <br />
                </h4>

                <button type="button" className="buttonn">
                  <a
                    className="a"
                    href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=359224384-0827e603-d363-4e42-9efd-df623b1535ca"
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

export default InfoCoord;
