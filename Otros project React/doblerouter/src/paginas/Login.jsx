import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom/dist'
import Contexto from '../context/Contexto';

const Login = () => {

  const {logearme} = useContext(Contexto);
  const navegacion = useNavigate();
  const login = () => {
          navegacion('/', {replace:true})
          logearme("Jab");
  }

  return (
    <>
       <h1>Pagina de Login</h1>
       <button onClick={login}> Login</button> 
    </>
  )
}

export default Login
 