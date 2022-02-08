import logo from "./logo.svg";
import "./App.css";

//Se importa el componente con un nombre personalizado
import FI from "./components/FormInput";
import Presy from "./components/Presentacion";
import PresFnc from "./components/PresentacionFnc";
import Est from "./components/Estado";
import RenderIf from "./components/RenderCondicional";
import { Eventos, EventosES7, MasSobreEventos } from "./components/Eventos";
import Comunicacion from "./components/Comunicacion";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
// ================================================================

// ================================================================
/*
Componente en forma de función
Recibe el dato de fecha
Retorna un H3 con el dato recibido
3 versiones
*/
function Fecha01(fecha_actual) {
	var mostrarFecha = (
		<div>
			<h3>La fecha de hoy es: {fecha_actual}</h3>
		</div>
	);
	return mostrarFecha;
}
function Fecha02(props) {
	var mostrarFecha = (
		<div>
			<h3>La fecha actual es: {props.fecha_actual}</h3>
		</div>
	);
	return mostrarFecha;
}

const Fecha03 = (props) => (
	<div>
		<h3>Hoy es: {props.fecha_actual}</h3>
	</div>
);
// ================================================================

function App() {
	// Parametros enviados a los componentes
	let _fecha = new Date();

	let _nombre = "Edgar Chávez M";
	let _github = "https://github.com/alexdta/";
	let _conocimientos = ["C#", "Postgresql", "HTML", "JavaScript", "GIT"];
	// ========================================================

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Aprendiendo
					<a
						className="ms-1 btn btn-primary"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						REACT JS<i className="ms-1 fab fa-react"></i>
					</a>
				</p>
				<section>
					<hr />
					{
						//Llamando a un componente
						//Se hace una etiqueta tipo HTML con el nombre del componente <Presy />
						//Las propiedades de la etiqueta serán los parametros que se le pasen al componente
					}
					{/* <Presy nombre={_nombre} github={_github} conocimientos={_conocimientos} /> */}

					<PresFnc
						nombre={_nombre}
						github={_github}
						conocimientos={_conocimientos}
					/>
				</section>
				<section>
					<hr />
					{
						//Llamado a una función con parametros
						Fecha01(_fecha.toLocaleDateString())

						/* 
          				Abajo se aprecia el llamado a 2 funciones 
						que hacen lo mismo pero las funciones
          				y la forma de crear el componente es distinta
          				*/
					}
					<Fecha02 fecha_actual={_fecha.toLocaleDateString()} />
					<Fecha03 fecha_actual={_fecha.toLocaleDateString()} />
				</section>
				<section>
					<hr />
					{
						// Llamado a componente con parametros
						// Se hace una etiqueta tipo HTML con el nombre del componente <FI></FI> o <FI />
						// Las propiedades de la etiqueta serán los parámetros que se le pasen al componente
					}
					<form>
						<FI etiqueta="Nombre" tipo="text" id="1" requerido="required"></FI>
						<FI etiqueta="Fecha" tipo="date" id="2" />
						<FI etiqueta="Edad" tipo="number" id="3" />
					</form>
				</section>
				<section>
					<hr />
					<Est></Est>
				</section>
				<section>
					<hr />
					{/*
						Renderizado condicional
						Se dibuja uno u otro componente dependiendo del estado del mismo
						this.state = { session: true };
						o
						this.state = { session: false };
						*/}
					<RenderIf />
				</section>
				<section>
					<hr />
					<Eventos />
					<hr />
					<EventosES7 />
					<hr />
					<MasSobreEventos />
				</section>
				<section>
					<hr />
					<Comunicacion />
				</section>
				<section>
					<hr />
					<CicloVida />
				</section>
				<section>
					<hr />
					<AjaxApis />
				</section>
				<section>
					<hr />
					<ContadorHooks valorInicial={100} />
				</section>
			</header>
		</div>
	);
}

export default App;
