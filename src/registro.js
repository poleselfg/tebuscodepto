import React from "react";
import "./main.css";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";

class PageRegister extends React.Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <div className="paper bgregis">
          <Navbar />
          <div className="col-sm-4 textocolumna">
            <div className="row">
              <h1>REGISTRATE!</h1>
            </div>
            <div className="row">
              <h2>Podras elegir... </h2>
            </div>
            <div className="row">
              <p>
                tus preferencias y luego el plan que mas te guste
                <br />
                es simple y rapido!
              </p>
            </div>
          </div>
          <button type="button" className="button">
            <a className="a" href={"/plans"}>
              REGISTER
            </a>
          </button>
          <button type="button" className="buttonreg">
            <a className="a" href={"/register/form"}>
              LOGIN
            </a>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default PageRegister;
