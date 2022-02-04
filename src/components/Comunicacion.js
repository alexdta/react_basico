import React, { Component } from "react";

export default class Padre extends Component {
	state = {
		contador: 0,
	};

	sumar = (e) => {
		this.setState({
			contador: this.state.contador + 1,
		});
	};

	restar = (e) => {
		if (this.state.contador > 0) {
			this.setState({
				contador: this.state.contador - 1,
			});
		}
	};

	render() {
		return (
			<>
				<h1>Comunicación entre componentes</h1>
				<h2>Contador = {this.state.contador}</h2>
				<Hijo mensaje="Hijo1" evento={this.sumar} tipo={1}></Hijo>
				<Hijo mensaje="Hijo2" evento={this.restar} tipo={2}></Hijo>
			</>
		);
	}
}

function Hijo(props) {
	return (
		<>
			<h3>{props.mensaje}</h3>
			{props.tipo === 1 ? (
				<button onClick={props.evento} className="btn btn-outline-success">
					<i className="fas fa-plus-circle"></i>
				</button>
			) : (
				<button onClick={props.evento} className="btn btn-outline-danger">
					<i className="far fa-minus-square"></i>
				</button>
			)}
		</>
	);
}
