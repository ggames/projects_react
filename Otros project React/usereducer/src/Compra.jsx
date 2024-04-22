import React, { useReducer, useState} from 'react'

const types = {
    menos: 'menos',
    mas: 'mas',
    eliminar: 'eliminar',
    comprar: 'comprar'
}

const valorInicial = [{id:1, nombre: 'Agua', cantidad: 3},{id:2, nombre: 'Pan', cantidad: 2}];

const reducer=(state, action) => {
    switch(action.type){
        case types.menos:
            return state.map(cosa => 
                (action.payload === cosa.id && cosa.cantidad > 1)?
                {...cosa, cantidad: cosa.cantidad -1} :
                 cosa)
        case types.mas:
            return state.map(cosa =>
               (action.payload === cosa.id )? 
               {...cosa, cantidad: cosa.cantidad + 1}:
               cosa
            )
        case types.eliminar:
            return (state.filter(valor => valor.id !== action.payload)) 
        
        case types.comprar: 
            return [...state, action.payload ]
        default: 
            return state;
    }
    return state;
}

function Compra() { 
  const [miProducto, setMiProducto] = useState("");
 
  const [lista, dispatch] = useReducer(reducer, valorInicial);
 
  return (
    <>
      <label htmlFor='producto'>Producto: </label>
      <input id='producto' value={miProducto} onChange={(e)=> setMiProducto(e.target.value)} />
      <button className='libre' 
        onClick={()=>{ 
            const newId = lista[lista.length-1].id + 1;
            dispatch({type: types.comprar, payload: {id: newId, nombre: miProducto,cantidad:1}} )    }} >Añadir</button> 
       
      {
        lista.map((producto) => <div key={producto.id}>
           { producto.nombre} ({producto.cantidad} unidades) 
           <button onClick={()=> dispatch({type: types.menos, payload: producto.id})}>-</button>
           <button onClick={()=> dispatch({type: types.mas, payload: producto.id})}>+</button>
           <button onClick={()=> dispatch({type: types.eliminar, payload: producto.id})}>x</button>
          
        </div>)
      }
    </>
  )
}

export default Compra
