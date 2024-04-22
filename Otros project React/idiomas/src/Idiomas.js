import React, { useContext } from 'react'
import Contexto from './contexto/Contexto'
import Provider from './contexto/Provider';

function Idiomas() {
  
  const {setAlumno} = useContext(Contexto);
  const {alumno} = useContext(Contexto);

  const sustitucion= (posicion) => {
    setAlumno(
      alumno.map((dato,indice)=>
        indice == 3 ? {...dato, idioma: posicion }: {...dato}
      )
    )
  }

  const cambio1= ()=> {
         sustitucion(0);
  }
  const cambio2= ()=> {
        sustitucion(1);
  }

  const cambio3= ()=> {
        sustitucion(2);
  }

  return (
    <div className='idiomas'>
      <div className='bandera' onClick={cambio1}>
         <img src='../images/spain.jpg' alt='bandera Spain'/>
      </div>
      <div className='bandera' onClick={cambio2}>
         <img src='../images/uk.png' alt='bandera UK'/>
      </div>
      <div className='bandera' onClick={cambio3}>
         <img src='../images/francia.png' alt='bandera Francia'/>
      </div>
      
    </div>
  )
}

export default Idiomas