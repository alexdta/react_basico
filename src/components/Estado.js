import React, { Component } from "react";

function EstadoAHijo(props)
{
    return(
        <p>Este dato se actualiza cada segundo: {props.contadorHijo}</p>
    );
}


export default class Estado extends Component {
  /*Constructor
    se establecen las propiesdades del estado
    en este caso un contador
  */
    constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    // Metodo que actualiza el estado cada segundo 
    setInterval(() => {
      this.setState({
        contador: this.state.contador + 10,
      });
    }, 1000);
  }

  render() {
    return (
      <React.Fragment>
        <h2>Mi Estado</h2>
        <EstadoAHijo contadorHijo={this.state.contador} ></EstadoAHijo>
      </React.Fragment>
    );
  }
}