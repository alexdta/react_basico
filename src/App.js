import logo from "./logo.svg";
import "./App.css";

//Se importa el componente con un nombre personalizado
import FI from "./components/FormInput";
// ================================================================

// ================================================================
//Componente en forma de función
//Recibe el dato de fecha
//Retorna un H3 con el dato recibido
function fecha(fecha_actual) {
  var mostrarFecha = (
    <div>
      <h3>La fecha de hoy es: {fecha_actual}</h3>
    </div>
  );
  return mostrarFecha;
}
// ================================================================

function App() {
  // Parametros enviados a los componentes
  let _fecha = new Date();
  // ========================================================

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aprendiendo{" "}
          <a
            className="btn btn-primary"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            REACT JS<i className="ms-1 fab fa-react"></i>
          </a>
        </p>

        {
          //Llamado a una función con parametros
          fecha(_fecha.toLocaleDateString())
        }

        <hr />
        {
          // Llamado a componente de clase con parametros
          // Se hace una etiqueta tipo HTML con el nombre del componente <FI></FI> o <FI />
          // Las propiedades de la etiqueta serán los parámetros que se le pasen al componente
        }
        <section>
          <form>
            <FI etiqueta="Nombre" tipo="text" id="1" requerido="required"></FI>
            <FI etiqueta="Fecha" tipo="date" id="2" />
            <FI etiqueta="Edad" tipo="number" id="3" />
          </form>
        </section>
      </header>
    </div>
  );
}

export default App;
