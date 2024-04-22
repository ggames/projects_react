import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
         <NavLink className={({isActive})=> (isActive?'activo':null)} to="/">Home</NavLink>
        <NavLink className={({isActive})=> (isActive?'activo':null)} to="/reyes/atanagildo">Atanagildo</NavLink>
        <NavLink className={({isActive})=> (isActive?'activo':null)} to="/reyes/ataulfo">Ataulfo</NavLink>
        <NavLink className={({isActive})=> (isActive?'activo':null)} to="/reyes/ervigio">Ervidio</NavLink>
        <NavLink className={({isActive})=> (isActive?'activo':null)} to="/reyes/leogivildo">Leogivildo</NavLink>
        <NavLink className={({isActive})=> (isActive?'activo':null)} to="/reyes/recesvinto">Recesvinto</NavLink>
        <NavLink className={({isActive})=> (isActive?'activo':null)} to="/reyes/sisebuto">Sisebuto</NavLink>
      
    </nav>
  )
}

export default Nav
