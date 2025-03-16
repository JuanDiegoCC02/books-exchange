import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/StyleHeaderPages.css'


function HeaderPages() {
  return (
    <div>

            <div className='containerHeader'>

                <h1>Shared Reading</h1>
                

                <div>
                    <Link className='LinksHeader' to='/LogIn'> Contact us </Link>
                    <Link className='LinksHeader' to='/LogIn'> Services </Link>
                    <Link className='LinksHeader' to='/LogIn'> Home </Link>
                    <Link className='LinksHeader' to='/LogIn'> Profiles </Link>
                    <Link className='LinksHeader' to='/LogIn'> Chats </Link>
               
                </div><br />
                
                <hr  className='TituloBarra'/>
             
            </div>

    </div>
  )
}

export default HeaderPages