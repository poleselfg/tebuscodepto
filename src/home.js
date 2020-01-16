import React from "react";
import "./main.css";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";

class PageHome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <br />

        <div className="paper bghome">
          <Navbar />

          <div className="col-sm-4 textocolumna">
            <div className="row">
              <h1>BUSCAMOS</h1>
            </div>
            <div className="row">
              <h2>LO QUE VOS </h2>
            </div>
            <div className="row">
              <h2>NECESITAS</h2>
            </div>
            <div className="row">
              <p>
                Encontra el mejor plan para vos! <br />
                Es muy simple, elegi tu plan, selecciona tus <br />
                preferencias y comenzamos la busqueda.
              </p>
            </div>
          </div>
          <button type="button" className="button">
            <a className="a" href={"/plans"}>
              PLANES
            </a>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default PageHome;
