import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/StyleHeaderPages.css'


function HeaderPages() {
  return (
    <div>

      <div className='containerHeader'>

        <h1 className='titleHeader'>Shared Reading</h1>


        <div>
          <div className='containerLinksHdr'>
          <Link className='LinksHeader' to='/Register'> Register </Link>
          <Link className='LinksHeader' to='/LogIn'> Log In </Link>
          {
            localStorage.getItem ("typeUser") &&
          <Link className='LinksHeader' to='/HomeAdm'> Form Books </Link>
         } 
          {
          localStorage.getItem("typeUser") === "admin" && 
          <Link className='LinksHeader' to='/Saved'> Saved </Link>
         }
          {
            localStorage.getItem("typeUser") === "user" && 
            <Link className='LinksHeader' to='/UserSavedPag'> Post </Link>
          }
          {
                        localStorage.getItem ("typeUser") &&
          <Link className='LinksHeader' to='/MyBooks'>Favorites</Link>
        }
        
          <Link className='LinksHeader' to='/ContactUs'> Contatc Us </Link>
          <Link className='LinksHeader' to='/Front'> Home </Link>
          </div>


        </div><br />

        <hr className='TituloBarra' />

      </div>

    </div>
  )
}

export default HeaderPages