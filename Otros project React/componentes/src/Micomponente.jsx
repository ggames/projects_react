import React from 'react'


function Micomponente({nombre, precio, color, setTotal}) {
    const ruta="http://www.html6.es/img/rey_";
    const imagen= `${ruta}${nombre.toLowerCase()}.png`;
 
    const comprar=(elemento)=> {
       setTotal((e)=> e+precio);
       elemento.target.parentNode.style.display="none";
    }
    return (
      <>
        <div className='card' style={{backgroundColor: color}} >
            <h2>{nombre}</h2>
            <img src= {imagen} alt= {nombre}/>
            <div className='titulo' >Precio:</div>
            <div className='precio'>{precio} €</div>
           
                   <button onClick={comprar} >Comprar</button>
            
            
            
    
        </div>
      </>  
    
  )
}

/* Micomponente.defaultProps = {
    url: 'https://www.html6.es/img/rey_.png',
    nombre: 'Sin nombre'
} */

export default Micomponente;
