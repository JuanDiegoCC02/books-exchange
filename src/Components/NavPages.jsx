import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../Styles/StyleNavPages.css'
import UserConfg from '../icons/UserConfg.png'
import ComponentCloseSS from './ComponentCloseSS';


function NavPages() {
  const [options, setOptions]= useState(false)
  return (
    <div>

      <div className='containerHeader'>
        <h1 className='titleHeader'>Shared Reading</h1>
      </div>

          <div className='containerLinksHdr'>
            {
              !localStorage.getItem("typeUser")&&(
                <>
                 <NavLink className='LinksHeader' to='/Register'> Register </NavLink>
                 <NavLink className='LinksHeader' to='/LogIn'> Log In </NavLink>
                </>
              )
            }
         
          {
            localStorage.getItem ("typeUser") &&
          <NavLink className='LinksHeader' to='/formBooks'> Books Form </NavLink>
         } 
          {
          localStorage.getItem("typeUser") === "admin" && 
          <>
          <NavLink className='LinksHeader' to='/adminNewBooks'> Books Admin </NavLink>
          <NavLink className='LinksHeader' to='/adminPage'> Administration</NavLink>
         </>
         }
          {
            localStorage.getItem("typeUser") === "User" && 
            <NavLink className='LinksHeader' to='/usersNewBooks'> Books </NavLink>
          }
          {
           localStorage.getItem ("typeUser") &&
          <NavLink className='LinksHeader' to='/MyBooks'>Favorites</NavLink>
          
        }
        
          <NavLink className='LinksHeader' to='/ContactUs'> Contatc Us </NavLink>
          <NavLink className='LinksHeader' to='/'> Home </NavLink>

         
          {  localStorage.getItem ("typeUser") &&
          <div className='containerOptions'>
            <button className='btnOptions' onClick={() => setOptions(!options)}> <img src={UserConfg} alt="" width={25} height={25}/> </button>
            {options && 
               <>
                   <ComponentCloseSS/>
               </>
            }
      
          </div>
          }


      </div>

  
    </div>
  )
}

export default NavPages