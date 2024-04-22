import React, { useContext } from 'react'
import { Contexto } from './contexto/Contexto'

function Pagina3() {
   const {color} = useContext(Contexto);

    return (
    <div className='hijo' style={{background: color}}>
        Pagina 3
       
    </div>
  )
}

export default Pagina3
  