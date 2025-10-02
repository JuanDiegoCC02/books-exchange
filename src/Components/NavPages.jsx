import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/StyleNavPages.css'
import UserConfg from '../icons/UserConfg.png'
import ComponentCloseSS from './ComponentCloseSS';


function NavPages() {
  const [options, setOptions]= useState(false)
  return (
    <div>

      <div className='containerHeader'>

        <h1 className='titleHeader'>Shared Reading</h1>


        <div>
          <div className='containerLinksHdr'>
            {
              !localStorage.getItem("typeUser")&&(
                <>
                 <Link className='LinksHeader' to='/Register'> Register </Link>
                 <Link className='LinksHeader' to='/LogIn'> Log In </Link>
                </>
              )
            }
         
          {
            localStorage.getItem ("typeUser") &&
          <Link className='LinksHeader' to='/HomeAdm'> Books Form </Link>
         } 
          {
          localStorage.getItem("typeUser") === "admin" && 
          <Link className='LinksHeader' to='/Saved'> Books Admin </Link>
         }
          {
            localStorage.getItem("typeUser") === "User" && 
            <Link className='LinksHeader' to='/UserSavedPag'> Books </Link>
          }
          {
                        localStorage.getItem ("typeUser") &&
          <Link className='LinksHeader' to='/MyBooks'>Favorites</Link>
          
        }
        
          <Link className='LinksHeader' to='/ContactUs'> Contatc Us </Link>
          <Link className='LinksHeader' to='/'> Home </Link>

         
         
          
       
          </div>


        </div>

      </div>

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
  )
}

export default NavPages