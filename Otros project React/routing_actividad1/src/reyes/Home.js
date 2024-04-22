import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const lista = ["atanagildo","ervigio","sisebuto","leogivildo",
            "ataulfo","recesvinto",]
  return (
    <div className='reyes'>
      {
         lista.map(unRey => <Link to={`/reyes/${unRey}`}>
            <img src={`https://www.html6.es/img/rey_${unRey}.png`} alt={`${unRey}`} />
         </Link>)
      }
      
    </div>
  )
}

export default Home
