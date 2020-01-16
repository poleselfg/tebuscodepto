// Añadimos React & nuestro archivo de configuración
import React, { Component } from "react";
import firebaseConf from "./Firebase";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar";

class Contacto extends Component {
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
          this.showAlert("success", "Su mensaje fue enviado con exito!");
        })
        .catch(() => {
          // Si ha ocurrido un error, actualizamos nuestro estado para mostrar el error
          this.showAlert("danger", "Su mensaje no pudo ser enviado.");
        });
      // limpiamos nuestro formulario llamando la funcion resetform
      this.resetForm();
    } else {
      // En caso de no llenar los elementos necesario despliega un mensaje de alerta
      this.showAlert("warning", "Por favor, complete el formulario.");
    }
  }

  render() {
    return (
      <React.Fragment>
        <br />
        <div className="paper bgcontacto">
          <Navbar />
          <br />

          <div>
            {this.state.alert && (
              <div
                className={`alert alert-${this.state.alertData.type}`}
                role="alert"
              >
                <div className="container">{this.state.alertData.message}</div>
              </div>
            )}
            <div className="container">
              <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-4 rubik ">
                  <h2 className="formcont">Formulario de Contacto</h2>
                  <form
                    onSubmit={this.sendMessage.bind(this)}
                    ref="contactForm"
                  >
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
                    <button type="submit" className="btn btn-primary">
                      Enviar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contacto;
