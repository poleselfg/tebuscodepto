import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageHome from "./home";
import PageAbout from "./About";
import PagePlans from "./planes";
import PageRegister from "./registro";
import PageRegisterForm from "./registro-form";
import InfoCiere from "./infocierre";
import InfoDepto from "./infodepto";
import InfoCoord from "./infocoord";
import Contacto from "./contact";
import PageHomeMobile from "./homemobile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 700;

    if (isMobile) {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PageHomeMobile} />
          </Switch>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PageHome} />
            <Route exact path="/about" component={PageAbout} />
            <Route exact path="/plans" component={PagePlans} />
            <Route exact path="/plans/infocierre" component={InfoCiere} />
            <Route exact path="/plans/infodepto" component={InfoDepto} />
            <Route exact path="/plans/infocoord" component={InfoCoord} />
            <Route exact path="/register" component={PageRegister} />
            <Route exact path="/register/form" component={PageRegisterForm} />
            <Route exact path="/contact" component={Contacto} />
          </Switch>
        </BrowserRouter>
      );
    }
  }
}

export default App;
