import React from "react";
import PropTypes from "prop-types";

function PresentacionFnc(props)
{
    return (
        <React.Fragment>
          <h1>Hola, soy {props.nombre}!</h1>
          <section>
            <i>Conocimientos</i>
            <ul className="list-group">
              {
                //Los elementos de una lista deben tener una llave unica (id | key)
                props.conocimientos.map((c, i) => (
                  <li className="list-group-item" key={i}>
                    {c}
                  </li>
                ))
              }
            </ul>
          </section>
          <br />
          <section>
            Ir a:{" "}
            <a
              href={props.github}
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

PresentacionFnc.propTypes = {
    nombre: PropTypes.string.isRequired,
  };

export default PresentacionFnc;