import React, { useState } from "react";

export default function ContadorHooks(props) {
	/*Variable de estado
    const [nombreVariable, funcActualiza] = useState(valorInicial)
    */
	const [contador, setContador] = useState(props.valorInicial);

	const sumar = () => setContador(contador + 1);

	const restar = () => {
		if (contador > 0) {
			setContador(contador - 1);
		}
	};

	return (
		<>
			<h2>Hooks - useState</h2>
			<nav>
				<button onClick={sumar} className="btn btn-success me-1">
					<i className="far fa-plus-square"></i>
				</button>
				<button onClick={restar} className="btn btn-danger ms-1">
					<i className="far fa-minus-square"></i>
				</button>
			</nav>
			<h3>
				{props.titulo}
				{contador}
			</h3>
		</>
	);
}

ContadorHooks.defaultProps = {
	titulo: "Contador de Clicks: ",
};
