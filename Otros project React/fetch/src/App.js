import React from 'react'
import { useEffect, useState } from 'react'


const App = () => {
   const [chiste, setChiste] = useState("");

   const otro=()=> {
    const url = "https://api.chucknorris.io/jokes/random"
    const peticion = fetch(url);

    peticion.then(datos => datos.json())
            .then(lectura => setChiste( lectura.value))
            .catch(console.log);
   }

   useEffect(() => {
      otro();
   },[])

  return (
    <div>
        {chiste}
        <button onClick={otro}>otro chiste</button>
    </div>
  )
  }




export default App
