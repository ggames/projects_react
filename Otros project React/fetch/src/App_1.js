import './App.css';
import { useEffect, useState } from 'react';


function App() {
    const [datos, setDatos] = useState([]);
   
    const url = "https://randomuser.me/api/?results=1";
    
    //const peticion = useState([]);
   
             
    useEffect(()=> {
                     
        const peticion = fetch(url);
               peticion
                .then(datos => datos.json())
                .then(lectura => {
                    lectura.results.map((persona) => setDatos((e) => 
                        [...e, <div key={persona.email}>
                        {persona.name.first} {persona.name.last}
                     </div>]     
                    ))
                }).catch(()=> console.log('Se ha producido un error'));

    }, []);
        
    return (<>
         {datos}
    </>);

}

export default App;