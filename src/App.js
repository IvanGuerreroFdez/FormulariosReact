import logo from './logo.svg';
import './App.css';
import Contacto from './components/Contacto';
import Registro from './components/Registro';
import Mensaje from './components/Mensaje';

function App() {
  return (
    <div className="App">
      <Contacto/>
      <Registro/>
      <Mensaje/>
    </div>
  );
}

export default App;
