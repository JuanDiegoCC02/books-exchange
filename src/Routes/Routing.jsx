import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from '../Pages/Register';
import LogIn from '../Pages/LogIn';



function Routing() {

  return (
    <div>
      <Router>
        <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<LogIn/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default Routing