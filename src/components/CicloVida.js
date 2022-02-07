import React, { Component } from "react";

class Reloj extends Component {
	componentWillUnmount() {
		console.log(3, "El componente ha sido eliminado del DOM");
	}

	render() {
		return <h3>{this.props.hora}</h3>;
	}
}

export default class CicloVida extends Component {
	constructor(props) {
		super(props);

		console.log(0, "El componente se inicializa, aún no está en el DOM");

		this.state = {
			hora: new Date().toLocaleTimeString(),
			visible: false,
		};

		this.temporizador = null;
	}

	componentDidMount() {
		//Se ejecuta cuando ya todo está cargado en el DOM
		console.log(1, "El componente ya se encuentra en el DOM");
		//Util cuando queramos hacer peticiones a API's
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(2, "El estado o las props del componente han cambiado.");
		console.log("Propiedades previas: ", prevProps);
		console.log("Estado previo: ", prevState);
	}

	tictac = () => {
		this.temporizador = setInterval(() => {
			this.setState({
				hora: new Date().toLocaleTimeString(),
			});
		}, 1000);
	};

	iniciar = () => {
		this.tictac();
		this.setState({
			visible: true,
		});
	};

	detener = () => {
		clearInterval(this.temporizador);
		this.setState({
			visible: false,
		});
	};

	render() {
		console.log(
			4,
			"El componente se dibuja en el DOM (o actualiza por algún cambio)"
		);
		return (
			<>
				<h2>Ciclo de vida de los componente de Clase</h2>
				{this.state.visible && <Reloj hora={this.state.hora} />}
				<button onClick={this.iniciar} className="btn btn-outline-success me-1">
					<i className="far fa-play-circle"></i>
				</button>
				<button onClick={this.detener} className="btn btn-outline-danger ms-1">
					<i className="far fa-stop-circle"></i>
				</button>
			</>
		);
	}
}
