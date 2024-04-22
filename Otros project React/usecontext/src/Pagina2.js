import React, { useContext } from 'react'
import { Contexto } from './contexto/Contexto'

function Pagina2() {
   const {color} = useContext(Contexto);

    return (
    <div className='hijo' style={{background: color}}>
        Pagina 2
      
    </div>
  )
}

export default Pagina2
  