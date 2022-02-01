import logo from './logo.svg';
import './App.css';


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
          Aprendiendo <a className="btn btn-primary" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">REACT JS<i className="ms-1 fab fa-react"></i></a>
        </p>

        {
          //Llamado a una función con parametros
          fecha(_fecha.toLocaleDateString())
        }
       
      </header>
    </div>
  );
}

export default App;
