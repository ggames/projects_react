import React from 'react'
import { useContext } from 'react'
import Contexto from '../context/Contexto'
import { Navigate } from 'react-router-dom/dist';

const RutasPrivadas = ({children}) => {
   
    const {estado} = useContext(Contexto);
    
  return (estado)? children: <Navigate to="/login"/>
}

export default RutasPrivadas
