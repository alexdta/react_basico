import React, { Component } from "react";

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
        <p>Este dato se actualiza cada segundo: {this.state.contador}</p>
      </React.Fragment>
    );
  }
}