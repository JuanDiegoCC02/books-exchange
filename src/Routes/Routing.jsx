import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from '../Pages/Register';
import LogIn from '../Pages/LogIn';
import HomeForm from '../Pages/HomeForm';
import Front from '../Pages/Front';
import Saved from '../Pages/Saved';

import ContactUs from '../Pages/ContactUs';
import MyBooks from '../Pages/MyBooks';
import UserSavedPag from '../Pages/UserSavedPag';


function Routing() {

  return (
    <div>
      <Router>
        <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/' element={<Front/>}/>
            <Route path='/homeadm' element={<HomeForm/>}/>
            <Route path='/front' element={<Front/>}/>
            <Route path='/usersavedpag' element={<UserSavedPag/>}/>

            <Route path='/saved' element={<Saved/>}/>
            <Route path='/mybooks' element={<MyBooks/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default Routing