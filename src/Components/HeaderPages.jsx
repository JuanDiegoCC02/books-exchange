import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/StyleHeaderPages.css'


function HeaderPages() {
  return (
    <div>

            <div className='containerHeader'>

                <h1 className='titleHeader'>Shared Reading</h1>
                

                <div>
                    <Link className='LinksHeader' to='/Register'> Register </Link>
                    <Link className='LinksHeader' to='/LogIn'> Log In </Link>
                    <Link className='LinksHeader' to='/HomeAdm'> Form Books </Link>
                    <Link className='LinksHeader' to='/Saved'> Saved </Link>
                    <Link className='LinksHeader' to='/MyBooks'>My Books</Link>
                    <Link className='LinksHeader' to='/ContactUs'> Contatc Us </Link>
                    <Link className='LinksHeader' to='/Front'> Home </Link>
                  

               
                </div><br />
                
                <hr  className='TituloBarra'/>
             
            </div>

    </div>
  )
}

export default HeaderPages