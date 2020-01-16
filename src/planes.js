import React from "react";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./main.css";

class PagePlans extends React.Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <div className="paper bgblank">
          <Navbar />
          <div className="row">
            <div className="column">
              <div className="card listadpto">
                <br />
                <br />
                <div className="col-sm-12">
                  <div className="lista">
                    <h1>Lista de dptos</h1>
                    <p>
                      Se entrega un listado de deptos, segun las preferencias
                      del usuario
                    </p>
                  </div>
                </div>
                <button type="button" className="buttoncomprar">
                  <a
                    className="a"
                    href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=359224384-a52833bf-90e2-4ee8-a471-85087ccc0c0c"
                  >
                    Comprar
                  </a>
                </button>
                <button type="button" className="buttoninfo">
                  <a className="a" href="/plans/infodepto">
                    + Info
                  </a>
                </button>
              </div>
            </div>
            <div className="column">
              <div className="card coordinada">
                <br />
                <br />
                <div className="col-sm-12">
                  <div className="lista">
                    <h1>Visita Coordinada</h1>
                    <p>
                      Se entrega un listado de deptos, y en base a las
                      preferencias del usuario se generan hasta 5 visitas
                    </p>
                  </div>
                </div>
                <button type="button" className="buttoncomprar">
                  <a
                    className="a"
                    href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=359224384-0827e603-d363-4e42-9efd-df623b1535ca"
                  >
                    Comprar
                  </a>
                </button>
                <button type="button" className="buttoninfo">
                  <a className="a" href="/plans/infocoord">
                    + Info
                  </a>
                </button>
              </div>
            </div>
            <div className="column">
              <div className="card trato">
                <br />
                <br />
                <div className="col-sm-12">
                  <div className="lista">
                    <h1>Cerramos el Trato</h1>
                    <p>
                      Te acompañamos desde el proceso de seleccion, las visitas,
                      hasta el cierre del trato.
                    </p>
                  </div>
                </div>
                <button type="button" className="buttoncomprar">
                  <a
                    className="a"
                    href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=359224384-03201b38-43f8-41e2-9965-2e174e76d016"
                  >
                    Comprar
                  </a>
                </button>
                <button type="submit" className="buttoninfo">
                  <a className="a" href="/plans/infocierre">
                    + Info
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

export default PagePlans;
