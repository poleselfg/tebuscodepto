import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./mobile.css";
import Navbarm from "./components/navbarm";
import Button from "react-bootstrap/Button";
import firebaseConf from "./Firebase";
import Carousel from "react-bootstrap/Carousel";
import plan1 from "./mobile/p1-01.svg";
import plan2 from "./mobile/p2-01.svg";
import plan3 from "./mobile/p3-01.svg";

class PageHomeMobile extends React.Component {
  // inicializamos nuestro estado inicial
  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {}
    };
  }

  // Mostrar una alerta cuando se envia el formulario
  showAlert(type, message) {
    this.setState({
      alert: true,
      alertData: { type, message }
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000);
  }

  // Con esta funcion borramos todos los elementos del formulario
  resetForm() {
    this.refs.contactForm.reset();
  }

  // Funcion para enviar la informacion del formulario a Firebase Database
  sendMessage(e) {
    // Detiene la acción predeterminada del elemento
    e.preventDefault();

    // Creamos un objeto con los valores obtenidos de los inputs
    const params = {
      name: this.inputName.value,
      email: this.inputEmail.value,

      phone: this.inputPhone.value,
      message: this.textAreaMessage.value
    };

    // Validamos que no se encuentren vacios los principales elementos de nuestro formulario
    if (params.name && params.email && params.phone && params.message) {
      // enviamos nuestro objeto "params" a firebase database
      firebaseConf
        .database()
        .ref("form")
        .push(params)
        .then(() => {
          // Si todo es correcto, actualizamos nuestro estado para mostrar una alerta.
          this.showAlert("success", "Your message was sent successfull");
        })
        .catch(() => {
          // Si ha ocurrido un error, actualizamos nuestro estado para mostrar el error
          this.showAlert("danger", "Your message could not be sent");
        });
      // limpiamos nuestro formulario llamando la funcion resetform
      this.resetForm();
    } else {
      // En caso de no llenar los elementos necesario despliega un mensaje de alerta
      this.showAlert("warning", "Please fill the form");
    }
  }
  render() {
    return (
      <React.Fragment>
        <section className="white">
          <Navbarm />
          <br />
          <div
            className="container
          "
          >
            <div className="home" />
          </div>
          <br />
          <br />
          <div className="carousel">
            <Carousel>
              <Carousel.Item>
                <div className="containerr">
                  <img
                    className="d-block w-100 shadow"
                    src={plan1}
                    alt="First slide"
                  />
                  <Button href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=359224384-03201b38-43f8-41e2-9965-2e174e76d016">
                    Comprar
                  </Button>
                </div>
                <br />
                <Carousel.Caption />
              </Carousel.Item>
              <Carousel.Item>
                <div className="containerr">
                  <img
                    className="d-block w-100 shadow"
                    src={plan2}
                    alt="Third slide"
                  />
                  <Button href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=359224384-a52833bf-90e2-4ee8-a471-85087ccc0c0c">
                    Comprar
                  </Button>
                </div>
                <br />
                <Carousel.Caption />
              </Carousel.Item>
              <Carousel.Item>
                <div className="containerr">
                  <img
                    className="d-block w-100 shadow"
                    src={plan3}
                    alt="Third slide"
                  />
                  <Button href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=359224384-0827e603-d363-4e42-9efd-df623b1535ca">
                    Comprar
                  </Button>
                </div>

                <Carousel.Caption />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="container">
            <div className="reg" />
          </div>

          <div className="col text-center">
            <Button variant="outline-warning" className="">
              Registrate
            </Button>
          </div>

          <div className="container">
            <div className="espec" />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-sm-4 rubik">
                <h2 className="contacto">Contacto</h2>
                <form onSubmit={this.sendMessage.bind(this)} ref="contactForm">
                  <br />
                  <br />
                  <div className="form-group">
                    <label htmlFor="name" />
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Nombre"
                      ref={name => (this.inputName = name)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" />
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      ref={email => (this.inputEmail = email)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" />
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      placeholder="Telefono"
                      ref={phone => (this.inputPhone = phone)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" />
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                      placeholder="Escriba su mensaje aqui..."
                      ref={message => (this.textAreaMessage = message)}
                    />
                  </div>
                  <button type="submit" className="btn btn-outline-primary">
                    Enviar
                  </button>
                </form>
                <div className="container">
                  <div>
                    {this.state.alert && (
                      <div
                        className={`alert alert-${this.state.alertData.type}`}
                        role="alert"
                      >
                        <div className="container">
                          {this.state.alertData.message}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="final" />
          </div>
          <br />
          <br />
          <br />
          <div className="container text-center">
            <p>
              Derechos Reservados{" "}
              <a href="www.rambocreativo.com">Rambo Creativo®</a>
            </p>
          </div>
          <br />
        </section>
      </React.Fragment>
    );
  }
}

export default PageHomeMobile;
