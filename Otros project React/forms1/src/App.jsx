import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const { register, handleSubmit } = useForm();
  const obtenerValores = (data) => {};
  return (
    <>
      <form onSubmit={handleSubmit(obtenerValores)}>
        <div className="pregunta">
          <label htmlFor="nombre">Nombre:</label>
          <input id="nombre" placeholder="Tu nombre" autoFocus 
          {...register('nombre')} />
        </div>
        <div className="pregunta">
          <label htmlFor="edad">Edad:</label>
          <input id="edad" placeholder="Tu edad" autoFocus 
          {...register('edad')} />
        </div>
        <div className="pregunta">
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" placeholder="Tu nombre" autoFocus 
          {...register('nombre')} />
        </div>
        <div className="pregunta">
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" placeholder="Tu nombre" autoFocus 
          {...register('nombre')} />
        </div>
      </form>
    </>
  );
}

export default App;
