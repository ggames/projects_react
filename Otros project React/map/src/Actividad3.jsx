import React from 'react'


function Actividad3({reyes}) {
  const resultado = reyes.find(e => e.nombre.substring(0,1)=== "ñ" 
   || e.nombre.substring(0,1)==="Ñ");
   console.log(resultado);
  return (
   
    <>
      {resultado === undefined? "No se ha encontrado": resultado.nombre} 
    </>
  )
  
}

export default Actividad3
