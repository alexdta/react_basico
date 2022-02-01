import React, { Component } from "react";

function Login() {
  return (
    <div>
      <h3>Login</h3>
    </div>
  );
}

function Logout() {
  return (
    <div>
      <h3>Logout</h3>
    </div>
  );
}

export default class RenderCondicional extends Component {
  constructor(props) {
    super(props);
    this.state = { session: true };
  }

  render() {
    return (
      <div>
        <h2>Renderizado Condicional</h2>
        {
          //según el valor de la variable de estado se renderiza un elemento u otro
          this.state.session ? <Login /> : <Logout />
        }
      </div>
    );
  }
}
