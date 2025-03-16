import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from '../Pages/Register';
import LogIn from '../Pages/LogIn';
import HomeAdm from '../Pages/HomeAdm';



function Routing() {

  return (
    <div>
      <Router>
        <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/homeadm' element={<HomeAdm/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default Routing