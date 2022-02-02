import React, { Component } from "react";

export class Eventos extends Component {
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

// Properties Initializer
export class EventosES7 extends Component {
	state = { contador: 0 };

	/* 
  No es necesario hacer bind, ya que las "arrow function" heredan 
  el 'this' del contexto donde se encuentran
  */
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
			<div>
				<h2>Eventos en Componente de Clase (ES7)</h2>
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

const MiBoton =(props) => (
  <button className="btn btn-outline-primary" onClick={props.miOnClick}>Otro Saludo <i className="ms-1 fas fa-hand-spock"></i></button>
);

export class MasSobreEventos extends Component {
	handleClick = (e, mensaje) => {
		console.log(mensaje);
	};

	render() {
		return (
			<div>
				<h2>Más Sobre Eventos</h2>
				<button className="btn btn-primary me-1" onClick={(e) => this.handleClick(e, "Hola Que Hace!?")}>
					Saludar<i className="ms-1 far fa-hand-spock"></i>
				</button>
        <MiBoton miOnClick={(e) => this.handleClick(e, "Que Tal!?")}></MiBoton>
			</div>
		);
	}
}
