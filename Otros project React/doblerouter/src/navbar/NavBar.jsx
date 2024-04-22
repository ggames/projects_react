import { NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom/dist'
import Contexto from '../context/Contexto';
import { useContext } from 'react';

const NavBar = () => {
  const navegacion = useNavigate();
  const {deslogearme}= useContext(Contexto);
  const logout = () => {
        
          navegacion("/login",{replace:true});
          deslogearme();
  }


  return (
    <>
       <nav>
           <NavLink to="contenido1">Contenido 1</NavLink>
           <NavLink to="contenido2">Contenido 2</NavLink>
           <NavLink to="contenido3">Contenido 3</NavLink>
           <button onClick={logout}>Logout</button>
        </nav> 
    </>
  )
}

export default NavBar
