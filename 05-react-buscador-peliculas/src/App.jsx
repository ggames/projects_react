import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import "./App.css";
import { useEffect, useState, useRef } from "react";


function useSearch(){
  const [search, updateSearch ] = useState('')
  const [error, setError] = useState(null); //const inputRef = useRef()
  const isFirstInput = useRef(true)
  
  useEffect(() => {

    if(isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }

    if (search === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula con número");
      return;
    }
    if (search.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres");
      return;
    }

    setError(null)

  }, [search]);

 return { search, updateSearch, error }

}


function App() {
 // const { movies: mappedMovies } = useMovies();

  const { search, updateSearch, error} = useSearch()
  
  const { movies, loading, getMovies } = useMovies({ search})
  /**  const handleSubmit = (event) => {
    event.preventDefault()
    const inputEl = inputRef.current
    const value = inputEl.value
    console.log(value)
  }
  */
  /** OTRA MANERA DE HACER DE MANERA NATIVA CON JAVASCRIPT */

  const handleSubmit = (event) => {
    event.preventDefault();
    
    getMovies()
    //const fields =  new window.FormData(event.target)
    // recuperar todos los campos de input
    //const fields = Object.fromEntries(new window.FormData(event.target));
    //const query = fields.get('query')
    //    console.log({search});
  };

  const handleChange = (event) => {
    
    updateSearch(event.target.value)
    
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            
            style={{
              border: '1px solid transparent',
              borderColor: error? 'red':'transparent'
            }}

            onChange={handleChange}
            value={search}
            name="query"
            placeholder="Avengers, Star Wars, The Matrix..."
          />

          <button type="submit">Buscar</button>
        </form>
        { error && <p style={ {color: 'red' }}>{error}</p> }

      </header>
      <main>
        { loading ? <p>Cargando...</p>: <Movies movies={movies} /> } 
      </main>
    </div>
  );
}

export default App;
