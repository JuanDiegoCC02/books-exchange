import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from '../Pages/Register';
import LogIn from '../Pages/LogIn';
import BooksFormPage from '../Pages/BooksFormPage';
import Home from '../Pages/Home';
import PagAdminNewBooks from '../Pages/PagAdminNewBooks';

import ContactUs from '../Pages/ContactUs';
import MyBooks from '../Pages/MyBooks';
import PagUsersNewBooks from '../Pages/PagUsersNewBooks';
import Profile from '../Pages/Profile';
import AdministrationPage from '../Pages/AdministrationPage';


function Routing() {

  return (
    <div>
      <Router>
        <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/' element={<Home/>}/>


            <Route path='/formBooks' element={<BooksFormPage/>}/>
            <Route path='/profile' element={<Profile/>}/>

             <Route path='/adminPage' element={<AdministrationPage/>}/>

            <Route path='/usersNewBooks' element={<PagUsersNewBooks/>}/>
            <Route path='/adminNewBooks' element={<PagAdminNewBooks/>}/>
            <Route path='/mybooks' element={<MyBooks/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default Routing