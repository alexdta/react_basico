import React from "react";
import PropTypes from "prop-types";

// Función que crea un Input con su respectiva etiqueta
// Las propiedades de los elementos vienen por parametro
function FormInput(props) {

    return (
        <div className="form-group">
            <label className="control-label" htmlFor={props.id}>{props.etiqueta}:</label>
            <input type={props.tipo} id={props.id} className="form-control" />
        </div>
    );
}

//Valores predeterminados de las propiedades
FormInput.defaultProps = {
    requerido: ""
};


// => npm i -S prop-types
// especificar q tipo de datos debe venir
// tambien se puede especificar si son obligatorios de definir
// https://www.npmjs.com/package/prop-types
FormInput.propTypes = {
    id: PropTypes.string,
    tipo: PropTypes.string.isRequired
};

export default FormInput;