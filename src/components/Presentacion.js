import React from "react";
import PropTypes from "prop-types";

class Presentacion extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hola, soy {this.props.nombre}!</h1>
        <section>
          <i>Conocimientos</i>
          <ul className="list-group">
            {
              //Los elementos de una lista deben tener una llave unica (id | key)
              this.props.conocimientos.map((c, i) => (
                <li className="list-group-item" key={i}>
                  {c}
                </li>
              ))
              //this.props.conocimientos.map((c) => <li className="list-group-item">{c}</li>)
            }
          </ul>
        </section>
        <br />
        <section>
          Ir a:{" "}
          <a
            href={this.props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-info"
          >
            Github <i className="fab fa-git-alt ms-1"></i>
          </a>
        </section>
      </React.Fragment>
    );
  }
}

Presentacion.propTypes = {
  nombre: PropTypes.string.isRequired,
};

export default Presentacion;
