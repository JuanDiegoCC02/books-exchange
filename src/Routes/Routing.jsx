import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from '../Pages/Register';
import LogIn from '../Pages/LogIn';
import HomeAdm from '../Pages/HomeAdm';
import Front from '../Pages/Front';
import Saved from '../Pages/Saved';
import ContactUs from '../Pages/ContactUs';



function Routing() {

  return (
    <div>
      <Router>
        <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/' element={<Front/>}/>
            <Route path='/homeadm' element={<HomeAdm/>}/>
            <Route path='/front' element={<Front/>}/>
            <Route path='/saved' element={<Saved/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default Routing