import React, { Component } from "react";

function Pokemon(props) {
	return (
		<figure>
			<img src={props.avatar} alt={props.name} />
			<figcaption>{props.name}</figcaption>
		</figure>
	);
}

export default class AjaxApis extends Component {
	state = {
		pokemons: [],
	};

	componentDidMount() {
		let url = "https://pokeapi.co/api/v2/pokemon/";
		//Consulta inicial a la API
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				/*Para cada elemento de la lista de pokemons 
                se hace una nueva petición con los detalles*/
				json.results.forEach((element) => {
					fetch(element.url)
						.then((res) => res.json())
						.then((json) => {
							// console.log(json)
							let pokemon = {
								id: json.id,
								name: json.name,
								avatar: json.sprites.front_default,
							};
							/* se combina lo que ya hay en la variable de estado 
                            y se combina con el nuevo dato*/
							let pokemons = [...this.state.pokemons, pokemon];

							// se actualiza la variable de estado con la lista recien creada
							this.setState({ pokemons });
						});
				});
			});
	}

	render() {
		return (
			<>
				<h2>Peticiones Asíncronas en Componentes</h2>
				{this.state.length === 0 ? (
					<h3>
						<i className="fas fa-cloud-download-alt me-1"></i>Cargando . . .{" "}
					</h3>
				) : (
					this.state.pokemons.map((el) => (
						<Pokemon key={el.id} name={el.name} avatar={el.avatar} />
					))
				)}

				{}
			</>
		);
	}
}
