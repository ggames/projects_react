import React from 'react'
import { useParams } from 'react-router-dom';

function Modelo() {
  const { rey } = useParams();
  return (
    <div>
    <img src= {`https://www.html6.es/img/rey_${rey}.png`} alt={rey}/>
     <h1>{rey}</h1>
 </div>
  )
}

export default Modelo
