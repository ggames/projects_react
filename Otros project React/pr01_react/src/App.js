import logo from './logo.svg';
import './App.css';
//import * as imagen from './images/*';
import imagen0 from './images/rey_sisebuto.png';
import imagen1 from './images/rey_leogivildo.png';
import imagen2 from './images/rey_atanagildo.png';
import incognito from './images/rey_incognito.png';
import  './miCss.css'
import { useRef } from 'react';

function App() {
  let nombres = ['Sisebuto', 'Leogivildo', 'Atanagildo'];
  
  
  const cambiarImagen=(e) => {
      if(e.target.src.includes(incognito)){
          e.target.style.visibility = 'hidden';
          e.target.parentNode.style.backgroundColor = 'white';          
      }
      else
      {
        e.target.src = incognito;
        e.target.parentNode.style.backgroundColor = 'white';  
        
      }

  }

  const cambiarTexto=(e)=>{
     if(e.target.innerHTML == 'Visto'){
        e.target.style.visibility = 'hidden';
     }else{
        e.target.innerHTML = 'Visto'
     }
  }

  return (
    <div className="contenedor">
      <div  className='card'>
           <img onClick={cambiarImagen}  src={imagen0} className="mi"/>
          <div onClick={cambiarTexto}>{nombres[0]}</div>
      </div>
      <div className='card'>
           <img onClick={cambiarImagen} src={imagen1} className="mi"/>
          <div onClick={cambiarTexto}>{nombres[1]}</div>
      </div>
      <div className='card'>
           <img onClick={cambiarImagen} src={imagen2} className="mi"/>
          <div onClick={cambiarTexto}>{nombres[2]}</div>
      </div>
       
    </div>
  );
}

export default App;
