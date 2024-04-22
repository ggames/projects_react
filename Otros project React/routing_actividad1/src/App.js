import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Modelo from './reyes/Modelo';
import Nav from './Nav';
import Error404 from './Error404';
import Home from './reyes/Home';

function App() {

  return (
     <BrowserRouter>
         <Nav></Nav>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/reyes/:rey' element={<Modelo/>}/>
            <Route path='/leovigildo' element={ <Navigate to="/leogivildo"/>}/>
            <Route path='/*' element={<Error404/>}/>
         </Routes>
     </BrowserRouter>
  );
}

export default App;
