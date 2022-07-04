import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import LogoAutonorte from './componentes/LogoAutonorte';


function App() {
  return (
    <div className='aplicacion-tareas'>
      <LogoAutonorte/>
      <div className='tareas-lista-principal'>
      <h1>Mis tareas</h1>
      <ListaDeTareas />
      </div>
    </div>

  );
}

export default App;
