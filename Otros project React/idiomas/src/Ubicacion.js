import React, { useContext } from 'react'
import Contexto from './contexto/Contexto'

function Ubicacion() {

  const {alumno} = useContext(Contexto);
  const indice = alumno[3].idioma;

  return (
    <div className='ubicacion'>
        <h1>{alumno[indice].boton2}:</h1>
        <div className='texto'>
            {alumno[indice].direccion}
        </div>
    </div>
  )
}

export default Ubicacion
