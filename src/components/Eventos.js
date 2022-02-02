import React, { Component } from "react";

export default class Eventos extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };

    // bind para poder usar 'this' dentro de los metodos
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar() {
    if (this.state.contador > 0) {
      this.setState({
        contador: this.state.contador - 1,
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componente de Clase</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button className="btn btn-success me-1" onClick={this.sumar}>
            <i className="far fa-plus-square"></i>
          </button>
          <button className="btn btn-danger ms-1" onClick={this.restar}>
            <i className="far fa-minus-square"></i>
          </button>
        </nav>
      </div>
    );
  }
}
