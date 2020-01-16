import React from "react";
import "./main.css";
import Navbar from "./components/navbar";

class PageAbout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <div className="paper bgsomos">
          <Navbar />
          <div className="col-sm-4 textocolumna">
            <div className="row">
              <h1 className="h1amarillo">ESPECIALISTAS</h1>
            </div>
            <div className="row">
              <h2>Buscan segun tus preferencias</h2>
            </div>
            <div className="row">
              <p>
                Mientras mas especificas sean tus preferencias, mejor va a ser
                el trabajo de nuestros especialistas a la hora de encontrar las
                mejores opcioens para vos.
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

export default PageAbout;
