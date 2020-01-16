import React from "react";
import "./main.css";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";

class PageRegisterForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <div className="paper bgregistro">
          <Navbar />
        </div>
      </React.Fragment>
    );
  }
}

export default PageRegisterForm;
